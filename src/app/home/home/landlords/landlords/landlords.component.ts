//import { google } from '@agm/core/services/google-maps-types';
import { Component, ElementRef, EventEmitter,OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
//import { demo_data } from '../../services/demo_data.service';
//import { Router } from '@angular/router';
import { db } from '../../services/db.service';
import jwt_decode from "jwt-decode";
import { ActivatedRoute } from '@angular/router';
import { routeService } from '../../services/route.service';

@Component({
  selector: 'app-landlords',
  templateUrl: './landlords.component.html',
  styleUrls: ['./landlords.component.css']
})
export class LandlordsComponent implements OnInit{
  @Output() landlordListCount = new EventEmitter<number>();
  @ViewChild('lco')list_card_optionRef:ElementRef<HTMLInputElement>;


  constructor(
    private elementRef:ElementRef,
    private dbService:db,
    //private activeRoute:ActivatedRoute,
    private routeService:routeService
    ){}

  ngOnInit(): void {
    this.onLandlordTableList();
    this.elementRef.nativeElement;
    this._authri = this.routeService.RouteEdit;

  }

  /* -------- props ---------*/

  landlordTableList:any[] = [];
  filterString:string;
  addingLandlordAllowed:boolean=false;
  viewLandlordAllowed:boolean=false;
  deleteLandlordAllowed:boolean=false;
  editLandlordAllowed:boolean=false;
  selectdClient:any;
  dbName = '';
  loading:boolean = false;
  landlordCount:number = 0;
  _authri:string;

  private eleId = '';
  /* ------- end props ------- */
  set setId (eleId){this.eleId = eleId}
  get setId (){return this.eleId}


  async onLandlordTableList(){
    this.loading = true;
    await this.dbService.getData('landlordDb').then(
      res =>{
        this.landlordTableList  =[];
        res.forEach(element =>{
          this.landlordTableList.push(element.data());
          this.landlordCount += 1;
        });
        this.loading = false;
      }
    );
    //console.log(this.landlordCount);
    this.landlordListCount.emit(this.landlordCount);
  }

  add_landlord(){
    this.addingLandlordAllowed = true;
  }

  on_edit(data:any){
    this.onClose()
    this.editLandlordAllowed = true;
    this.selectdClient = data;
  }

  on_view(data:any){
    this.onClose();
    this.viewLandlordAllowed = true;
    this.selectdClient = data;
  }

  on_delete(data:any){
    this.onClose();
    this.deleteLandlordAllowed = true;
    this.selectdClient = data;
    this.dbName = 'landlordDb';
  }

  onReloadPg(){
    this.addingLandlordAllowed = false;
    this.viewLandlordAllowed = false;
    this.deleteLandlordAllowed = false;
    this.editLandlordAllowed = false;
    this.ngOnInit();

  }

  onClose(){
    let dropback = document.getElementById('dropback');
    let childList = document.getElementById(this.eleId);
    dropback.style.display = 'none';
    childList.style.display = 'none';
  }


  onCard_option(data:any){
    this.eleId = data.landlordId;

    let childList = document.getElementById(data.landlordId);
    let dropback = document.getElementById('dropback');
    this.landlordTableList.forEach(ele =>{
      if(ele.landlordId == data.landlordId){
        dropback.style.display = 'inline';
        childList.style.display = 'inline';

      }
    });
  }





}
