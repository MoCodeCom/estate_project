//import { google } from '@agm/core/services/google-maps-types';
import { Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { Router } from '@angular/router';
import { db } from '../../services/db.service';

@Component({
  selector: 'app-landlords',
  templateUrl: './landlords.component.html',
  styleUrls: ['./landlords.component.css']
})
export class LandlordsComponent implements OnInit{
  constructor(

    private elementRef:ElementRef,
    private dbService:db
    ){}
  ngOnInit(): void {
    this.onLandlordTableList();
    this.elementRef.nativeElement;
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
  /* ------- end props ------- */


  async onLandlordTableList(){
    this.loading = true;
    await this.dbService.getData('landlordDb').then(
      res =>{
        this.landlordTableList  =[];
        res.forEach(element =>{
          this.landlordTableList.push(element.data());
        });
        this.loading = false;
      }
    );

  }

  add_landlord(){
    this.addingLandlordAllowed = true;
  }

  on_edit(data:any){
    this.editLandlordAllowed = true;
    this.selectdClient = data;
  }

  on_view(data:any){
    this.viewLandlordAllowed = true;
    this.selectdClient = data;
  }

  on_delete(data:any){
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



}
