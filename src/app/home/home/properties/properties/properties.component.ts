import { Component, ElementRef } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { Icon, Marker } from 'leaflet';
import * as L from 'leaflet';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {

  autocomplete:any;
  constructor(
    private dataService:demo_data,
    private elementRef:ElementRef
    ){}
  ngOnInit(): void {
    this.onLandlordTableList();
    this.elementRef.nativeElement;
    this.initMap();
  }

  /* props*/
  lat = 52.46606;
  lng = -1.89131;
  PropertyTableList = [];
  filterString:string;
  addingPropertyAllowed:boolean=false;
  viewPropertyAllowed:boolean=false;
  deletePropertyAllowed:boolean=false;
  editPropertyAllowed:boolean=false;
  selectdClient:any;
  private map: L.Map;
  private centroid: L.LatLngExpression = [52.46606, -1.89131];
  markerPinUrl = "../";
  /* end props */

  /* --------- Marker on map ------------*/
  icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      // specify the path here
      iconUrl: './node_modules/leaflet/dist/images/marker-icon.png',
      shadowUrl: './node_modules/leaflet/dist/images/marker-shadow.png'
   })
};
/* ---------- End marker on map ---------*/

private initMap(): void {
    this.map = L.map('map'
    /*
    ,
    {
      center: this.centroid,
      zoom: 20
    }*/
    ).setView([this.lat, this.lng],25);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    var licon = L.icon({
      iconUrl:'assets/images/locationPin.png',

      iconSize:     [24,36], // size of the icon
      //shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [12,36], // point of the icon which will correspond to marker's location
      //shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });



    var marker = L.marker([this.lat, this.lng], {icon: licon}).addTo(this.map);
    marker.bindPopup("Mohammed alfadhel<br><img style='width:50px;' src='assets/images/mohammedAlfadhel.png'>").openPopup();

    tiles.addTo(this.map);
}


onLandlordTableList(){
  this.PropertyTableList = this.dataService.propertyData();
}

add_property(){
  this.addingPropertyAllowed = true;
}

on_edit(data:any){
  this.editPropertyAllowed = true;
  this.selectdClient = data;
}

on_view(data:any){
  this.viewPropertyAllowed = true;
  this.selectdClient = data;
}

on_delete(data:any){
  this.deletePropertyAllowed = true;
  this.selectdClient = data;
}

onReloadPg(){
  this.addingPropertyAllowed = false;
  this.viewPropertyAllowed = false;
  this.deletePropertyAllowed = false;
  this.editPropertyAllowed = false;
}


}
