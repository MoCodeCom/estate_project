import { AfterContentInit, AfterViewChecked, Component, ElementRef, OnChanges, OnInit, SimpleChanges, getNgModuleById } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { Icon, Marker } from 'leaflet';
import * as L from 'leaflet';
import { maping } from '../../services/maping.service';


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit, OnChanges{

  autocomplete:any;
  constructor(
    private dataService:demo_data,
    private elementRef:ElementRef,
    private mapService:maping
    ){}
  ngOnChanges(changes: SimpleChanges): void {

  }


  ngOnInit(): void {

    this.onLandlordTableList();
    this.elementRef.nativeElement;
    this.mapService.initMainMap();

  }

  /* props*/

  PropertyTableList = [];
  filterString:string;
  addingPropertyAllowed:boolean=false;
  viewPropertyAllowed:boolean=false;
  deletePropertyAllowed:boolean=false;
  editPropertyAllowed:boolean=false;
  selectdClient:any;


  //markerPinUrl = "../";
  /* end props */

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
  let str = this.selectdClient.Postcode;
  // call map
  this.mapService.initMap(str);
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
