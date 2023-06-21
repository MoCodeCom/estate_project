import { Component, ElementRef, OnInit } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit{
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
  otherTableList = [];
  filterString:string;
  addingOtherAllowed:boolean=false;
  viewOtherAllowed:boolean=false;
  deleteOtherAllowed:boolean=false;
  editOtherAllowed:boolean=false;
  selectdClient:any;
  /* end props */

  onMarker(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.leg;
  }

  onLandlordTableList(){
    this.otherTableList = this.dataService.otherData();
  }

  add_landlord(){
    this.addingOtherAllowed = true;
  }

  on_edit(data:any){
    this.editOtherAllowed = true;
    this.selectdClient = data;
  }

  on_view(data:any){
    this.viewOtherAllowed = true;
    this.selectdClient = data;
  }

  on_delete(data:any){
    this.deleteOtherAllowed = true;
    this.selectdClient = data;
  }

  onReloadPg(){
    this.addingOtherAllowed = false;
    this.viewOtherAllowed = false;
    this.deleteOtherAllowed = false;
    this.editOtherAllowed = false;
  }




}
