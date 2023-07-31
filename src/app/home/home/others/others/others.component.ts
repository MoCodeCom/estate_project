import { Component, ElementRef,  OnInit } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { Router } from '@angular/router';
import { db } from '../../services/db.service';
import { routeService } from '../../services/route.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit{

  constructor(
    private elementRef:ElementRef,
    private dbService:db,
    private routeService:routeService
    ){}
  ngOnInit(): void {
    this.onOtherTableList();
    this.elementRef.nativeElement;
    this._authri = this.routeService.RouteEdit;

  }

  /* props*/
  otherTableList = [];
  filterString:string;
  addingOtherAllowed:boolean=false;
  viewOtherAllowed:boolean=false;
  deleteOtherAllowed:boolean=false;
  editOtherAllowed:boolean=false;
  selectdClient:any;
  dbName = '';
  loading:boolean = false;
  _authri:string;
  private eleId = '';
  /* ------- end props ------- */
  set setId (eleId){this.eleId = eleId}
  get setId (){return this.eleId}
  /* end props */


  async onOtherTableList(){
    this.loading = true;
    await this.dbService.getData('otherDb').then(
      res =>{
        this.otherTableList  =[];
        res.forEach(element =>{
          this.otherTableList.push(element.data());
        });
        this.loading = false;
      }
    );
  }

  add_other(){

    this.addingOtherAllowed = true;
  }

  on_edit(data:any){
    this.onClose();
    this.editOtherAllowed = true;
    this.selectdClient = data;
  }

  on_view(data:any){
    this.onClose();
    this.viewOtherAllowed = true;
    this.selectdClient = data;
  }

  on_delete(data:any){
    this.onClose();
    this.deleteOtherAllowed = true;
    this.selectdClient = data;
    this.dbName = 'otherDb';
  }

  onReloadPg(){
    this.addingOtherAllowed = false;
    this.viewOtherAllowed = false;
    this.deleteOtherAllowed = false;
    this.editOtherAllowed = false;
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
    this.otherTableList.forEach(ele =>{
      if(ele.landlordId == data.landlordId){
        dropback.style.display = 'inline';
        childList.style.display = 'inline';

      }
    });

  }




}
