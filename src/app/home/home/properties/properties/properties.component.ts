import { AfterContentInit, AfterViewChecked, Component, ElementRef, OnChanges, OnInit, SimpleChanges, getNgModuleById } from '@angular/core';
//import { demo_data } from '../../services/demo_data.service';
//import { Icon, Marker } from 'leaflet';
//import * as L from 'leaflet';
import { maping } from '../../services/maping.service';
import { db } from '../../services/db.service';
import { routeService } from '../../services/route.service';
//import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
//import { pipe } from 'rxjs';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit{

  autocomplete:any;
  constructor(
    private elementRef:ElementRef,
    private mapService:maping,
    private dbService:db,
    private routeService:routeService
    ){
      this.onLandlordTableList();
      //console.log(this.propertyTableList);
    }

  ngOnInit(): void {
    //this.elementRef.nativeElement;
    this._authri = this.routeService.RouteEdit;
  }

  /* props*/

  propertyTableList:any[] = [];
  deletePropertyList:any[] = [];
  filterString:string;
  addingPropertyAllowed:boolean=false;
  viewPropertyAllowed:boolean=false;
  deletePropertyAllowed:boolean=false;
  editPropertyAllowed:boolean=false;
  selectdClient:any;
  dbName = '';
  loading:boolean = false;
  imagePath:string;
  _authri:string;
  private eleId = '';
  /* ------- end props ------- */
  set setId (eleId){this.eleId = eleId}
  get setId (){return this.eleId}
  /* end props */

async onLandlordTableList(){
  this.loading = true;
  this.propertyTableList = [];
  await this.dbService.getData('propertyDb').then(
    res =>{
      res.forEach(element =>{
        this.deletePropertyList.push(element.data());

        this.dbService.getStorageData(element.data()['image']).then(res =>{
          let pathEle = element.data();
          pathEle['image'] = res.toString();
          this.propertyTableList.push(pathEle);
        }).catch(err => console.log(err));
      });
      this.mapService.initMainMap();
      this.loading = false;
    }
  );
}


add_property(){
  this.addingPropertyAllowed = true;
}

on_edit(data:any){
  this.onClose();
  this.editPropertyAllowed = true;
  this.selectdClient = data;
}

on_view(data:any){
  this.onClose();
  this.viewPropertyAllowed = true;
  this.selectdClient = data;
  let str = this.selectdClient.Postcode;
  // call map
  this.mapService.initMap(str);
}

on_delete(data:any){
  this.onClose();
  this.deletePropertyAllowed = true;
  this.deletePropertyList.forEach(res=>{
    if(res['postcode'] === data['postcode'] && res['id'] === data['id'] && res['landlordId'] === data['landlordId']){
      this.selectdClient = res;
    }
  })
  this.dbName = 'propertyDb';
}

onReloadPg(){
  this.ngOnInit();
  this.addingPropertyAllowed = false;
  this.viewPropertyAllowed = false;
  this.deletePropertyAllowed = false;
  this.editPropertyAllowed = false;
}

onCard_option(data:any){
  console.log(data);
  this.eleId = data.landlordId;
    let childList = document.getElementById(data.landlordId);
    let dropback = document.getElementById('dropback');
    this.propertyTableList.forEach(ele =>{
      if(ele.landlordId == data.landlordId){
        dropback.style.display = 'inline';
        childList.style.display = 'inline';

      }
    });

}

onClose(){
  let dropback = document.getElementById('dropback');
    let childList = document.getElementById(this.eleId);
    dropback.style.display = 'none';
    childList.style.display = 'none';
}

}
