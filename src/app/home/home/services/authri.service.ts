import { Injectable, OnInit, Output } from "@angular/core";
import jwt_decode from "jwt-decode";
import { db } from "./db.service";


@Injectable({ providedIn:'root'})
export class authriService implements OnInit{
  constructor(
    private dbService:db
  ){}
  ngOnInit(): void {}

  async userDetails(){
    let userDetail:any;
    if(localStorage.getItem('userData')){
    let user = localStorage.getItem('userData');
    let token = jwt_decode(user);
    let useremail = token['email'];

    //get user data from firebase store
    let userarr = this.dbService.getData('usersDb');
    await userarr.then(res =>{
      res.forEach(ele=>{
        if(ele.data()['email'] == useremail){
          userDetail = {
            username: ele.data()['username'],
            phonenumber:ele.data()['phonenumber'],
            email: ele.data()['email'],
            status: ele.data()['position']
          }
        }
      });
    });
    }

    return userDetail;
  }

  async usersList(){
    let usersList = [];

    //get user data from firebase store
    let userarr = this.dbService.getData('usersDb');
    await userarr.then(res =>{
      res.forEach(ele=>{
        usersList.push(ele.data());
      });
    });

    return usersList;

  }

  async checkUser(){

    let isAdmin:boolean = false;

    //get user data form local stroage
    if(localStorage.getItem('userData')){
      let user = localStorage.getItem('userData');
    let token = jwt_decode(user);
    let useremail = token['email'];

    //get user data from firebase store
    let userarr = this.dbService.getData('usersDb');
    await userarr.then(res =>{
      res.forEach(ele=>{
        if(ele.data()['email'] == useremail && ele.data()['position'] == 'Admin'){
          isAdmin = true;

        }
      });
    });
    }
    //this.reload();
    return isAdmin;
  }



  /*
  reload(){
    setTimeout(() => {
      if(localStorage.getItem('reload')){
        window.location.reload();
        localStorage.removeItem('reload');
      }
    }, 10);

  }*/

}
