import { AfterContentInit, AfterViewChecked, Component, ElementRef, OnChanges, OnInit, SimpleChanges, getNgModuleById } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { Icon, Marker } from 'leaflet';
import * as L from 'leaflet';
import { maping } from '../../services/maping.service';
import { db } from '../../services/db.service';


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
    private mapService:maping,
    private dbService:db
    ){}
  ngOnChanges(changes: SimpleChanges): void {

  }


  ngOnInit(): void {
    this.onLandlordTableList();
    this.elementRef.nativeElement;
    this.mapService.initMainMap();
  }

  /* props*/

  propertyTableList = [];
  filterString:string;
  addingPropertyAllowed:boolean=false;
  viewPropertyAllowed:boolean=false;
  deletePropertyAllowed:boolean=false;
  editPropertyAllowed:boolean=false;
  selectdClient:any;
  dbName = '';
  loading:boolean = false;
  /* end props */

async onLandlordTableList(){
  this.propertyTableList = this.dataService.propertyData();

  this.loading = true;
    await this.dbService.getData('propertyDb').then(
      res =>{
        this.propertyTableList  =[];
        res.forEach(element =>{
          this.propertyTableList.push(element.data());
        });
        this.loading = false;
      }
    );
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
  this.dbName = 'propertyDb';
}

onReloadPg(){
  this.addingPropertyAllowed = false;
  this.viewPropertyAllowed = false;
  this.deletePropertyAllowed = false;
  this.editPropertyAllowed = false;
  this.ngOnInit();
}







}
