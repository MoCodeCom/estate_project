import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { authriService } from '../../services/authri.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit{

  constructor(
    private authriService:authriService
  ){}

  authAllowed = false;
  usersArr:any = [];
  deleteUserAllowed:boolean=false;
  selectdClient:any;
  dbName = '';
  btnClick:boolean;


  ngOnInit(): void {
    this.usersList();
  }

  onReloadPg(){

    this.deleteUserAllowed = false;
    this.authAllowed = false;
    this.ngOnInit();

  }

  // to get users list and show in the dom.
  async usersList(){
    this.usersArr = await this.authriService.usersList();
  }

  onUpdateActivation(data:any){
    this.deleteUserAllowed = true;
    this.selectdClient = data;
    this.dbName = 'usersDb';
    this.btnClick = true;
  }

  onUpdateAuthorization(data:any){
    this.deleteUserAllowed = true;
    this.selectdClient = data;
    this.dbName = 'usersDb';
    this.btnClick = false;
  }


  onAddNewUser(){
    this.ngOnInit();
    this.authAllowed = true;
  }
}
