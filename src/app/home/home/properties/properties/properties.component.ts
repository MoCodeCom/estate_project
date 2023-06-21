import { Component, ElementRef } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent {

  autocomplete:any;

  constructor(
    private dataService:demo_data,
    private router:Router,
    private elementRef:ElementRef
    ){}
  ngOnInit(): void {
    this.onLandlordTableList();
    this.elementRef.nativeElement;
  }

  /* props*/
  lat =52.483397249897365;
  lng =-1.8842605687335423;
  PropertyTableList = [];
  filterString:string;
  addingPropertyAllowed:boolean=false;
  viewPropertyAllowed:boolean=false;
  deletePropertyAllowed:boolean=false;
  editPropertyAllowed:boolean=false;
  selectdClient:any;
  /* end props */

onMarker(event){
  this.lat = event.coords.lat;
  this.lng = event.coords.leg;
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
