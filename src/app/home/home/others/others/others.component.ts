import { Component, ElementRef, OnInit } from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { Router } from '@angular/router';
import { db } from '../../services/db.service';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.css']
})
export class OthersComponent implements OnInit{
  constructor(
    //private dataService:demo_data,

    private elementRef:ElementRef,
    private dbService:db
    ){}
  ngOnInit(): void {
    this.onOtherTableList();
    this.elementRef.nativeElement;

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
    this.dbName = 'otherDb';
  }

  onReloadPg(){
    this.addingOtherAllowed = false;
    this.viewOtherAllowed = false;
    this.deleteOtherAllowed = false;
    this.editOtherAllowed = false;
    this.ngOnInit();
  }




}
