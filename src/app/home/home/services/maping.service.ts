import { Injectable, OnDestroy, OnInit } from "@angular/core";
import * as L from "leaflet";
import { demo_data } from "./demo_data.service";
import { db } from "./db.service";
import { collectionSnapshots } from "@angular/fire/firestore";

@Injectable({ providedIn:'root'})
export class maping implements OnInit, OnDestroy{
  constructor(private dataService:demo_data,
              private dbService:db ){
  }

  ngOnInit(): void {
    if(this.map){
      this.map = this.map.remove();
    }
    this.initMap('b120yl');
  }


  icon = {
      icon: L.icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 0 ],
        // specify the path here
        iconUrl: './node_modules/leaflet/dist/images/marker-icon.png',
        shadowUrl: './node_modules/leaflet/dist/images/marker-shadow.png'
     })
  };

  public map: L.Map;
  public mapMain: L.Map;
  lat = 52.466064 ;
  lng = -1.891307;
  postcodeArrs=[];

  /*async landlordListData(){
    await this.dbService.getData('propertyDb').then(
      res =>{
        this.propertyData  =[];
        res.forEach(element =>{
          this.landlordList.push(element.data());
        });
      }
    );
  }*/


  /* function to send the let/lng for properties postcode*/
  async propertiesPostcodes(){
    /* -- get data from property db --*/
    let propertyData = [];
    await this.dbService.getData('propertyDb').then(
      res =>{
        propertyData  =[];
        res.forEach(element =>{
          propertyData.push(element.data());
        });
      }
    );
    /* -- End get data form property db --*/


    for(let i of propertyData){
      let post:{latFunc:any, lngFunc:any, postcode:string, url:string}={latFunc:'',lngFunc:'', postcode:'', url:''};
      let d;
      if(i.postcode){d = await this.getLatLng(i.postcode);}
      post['latFunc']=d.latitude;
      post['lngFunc']=d.longitude;
      post['postcode']=i.postcode;

      if(i['image']){
        await this.dbService.getStorageData(i['image']).then(res =>{
          let pathEle = i;
          pathEle['image'] = res.toString();
          post['url']=pathEle['image'];
        }).catch(err => console.log(err));
      }else{
        post['url']='assets/images/mohammedAlfadhel.png';
      }
      this.postcodeArrs.push(post);
    }



  }

  async initMap(postcode:string='B12 0YL') {
    if(postcode){await this.getLatLng(postcode);}
    if(this.map){
      this.map.remove();
    }
    this.map = L.map('map').setView([this.lat, this.lng],15);
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
    /* ---- icon layer ---- */
    var licon = L.icon({
      iconUrl:'assets/images/locationPin.png',
      iconSize:     [14,26], // size of the icon
      //shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [2,26], // point of the icon which will correspond to marker's location
      //shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-1, -35] // point from which the popup should open relative to the iconAnchor
    });

    /* ---- marker layer ----*/
    var lmarker = L.marker([this.lat, this.lng], {icon: licon}).addTo(this.map);
    lmarker.bindPopup(postcode).openPopup();
    await tiles.addTo(this.map);

  }

  async initMainMap(){
    await this.propertiesPostcodes();
    if(this.mapMain){
      this.mapMain.remove();
    }
    this.mapMain = L.map('map').setView([this.lat, this.lng], 10);
    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      minZoom: 5,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.mapMain);
    /* ---- icon layer ---- */
    var licon = L.icon({
      iconUrl:'assets/images/locationPin.png',
      iconSize:     [14,26], // size of the icon
      //shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [2,26], // point of the icon which will correspond to marker's location
      //shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-1, -35] // point from which the popup should open relative to the iconAnchor
    });
    /* ---- marker layer Main----*/

    for(let i of this.postcodeArrs){
      var lmarker = L.marker([i.latFunc, i.lngFunc, i.postcode], {icon: licon}).addTo(this.mapMain);
      lmarker.bindPopup( i.postcode +"<br><img style='width:50px;' src='"+ i.url +"'>").openPopup();
    }
    await tiles.addTo(this.mapMain);
  }

  async getLatLng(postcodeData:string){
    let obj;
    let postcodeDataNoSpace = postcodeData.split(' ').join('');
    const f =  await fetch('https://api.postcodes.io/postcodes/'+postcodeDataNoSpace)
      .then(data => data.json().then(res =>{
        obj = res.result;
      }))
      .catch(err => console.log('Postcode not exist! ' + err));
      this.lat = 0;
      this.lng = 0;

    this.lat = obj.latitude;
    this.lng = obj.longitude;

    return obj;

  }

  async checkPostcode(postcodeData:string):Promise<any>{
    let obj;
    let postcodeDataNoSpace = postcodeData.split(' ').join('');
    const f =  await fetch('https://api.postcodes.io/postcodes/'+postcodeDataNoSpace)
      .then(data => data.json().then(res =>{
        obj = res.result;
      }))
      .catch(err => console.log('Postcode not exist! ' + err));

      return obj;
  }

  ngOnDestroy(): void {
    this.map.remove();
    this.mapMain.remove();
  }






}
