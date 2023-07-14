import { Injectable, OnInit } from "@angular/core";
import { db } from "./db.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

@Injectable({ providedIn:'root'})
export class notificationService implements OnInit{
  constructor(
    private dbService:db,
    private http:HttpClient){
    this.getPorpNotificaion();
    this.fetchData();
  }
  date = new Date();
  arr =[];

  ngOnInit(): void {
    console.log('arr: '+this.arr);
  }

  proparr:any;
  tenantarr:any;
  async getPropertyData():Promise<any>{
    return await this.dbService.getData('propertyDb');
  }



  async postData(names:any){
    await this.http
    .post('https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json',names)
    .subscribe(res =>{
      //to get item's name in db.
      //console.log(res);
    });
  }

  async fetchData(num:number=10){
    await this.http.get('https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json').subscribe(res=>{
      this.arr.push(res);
      // to delete data over num automatically
      if(Object.keys(this.arr[0]).length > num){

        let oldDate:any = null;
        let newDate:any = null;
        let deletedName:string = null;

        for(let i in this.arr[0]){
          if(oldDate == null){
            oldDate = this.arr[0][i]['date'];
            deletedName = i;

          }else{
            newDate = null;
            newDate = this.arr[0][i]['date'];
            let oldDateAsDate = Date.parse(oldDate);
            let newDateAsDate = Date.parse(newDate);
            if(oldDateAsDate < newDateAsDate ){
              this.deleteData(deletedName);
            }
          }
        }
      }
    });



  }

  async getTenantData():Promise<any>{
    return await this.dbService.getData('tenantDb');
  }

  async deleteData(itemName?){
    if(itemName == null){
      await this.http.delete(`https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json`)
      .subscribe(res =>{});
    }else{
      await this.http.delete(`https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts/${itemName}.json`)
      .subscribe(res=>{});
    }
  }



  //no
  getTenentData(){

  }

  //no
  getDateToReceiveRent(){

  }

  //no
  getDateToPayRent(){
  }

  //get porperty data.
  async getPorpNotificaion(){
    //console.log(this.date);
    let year = this.date.getUTCFullYear();
    let month = this.date.getUTCMonth() + 1;
    let day = this.date.getUTCDate();
    let arrs = [];

    //let dateStr = new Date(year +'-'+ month +'-'+ day);
    //console.log(dateStr);
    this.proparr = await this.getPropertyData().then(res =>{
      res.forEach(element => {

        let dateRent = new Date(element.data()['date']);

        if(this.date > dateRent){
          arrs.push(element.data());
        }
      });
    });
    return await arrs;
  }

  //get tenant data.
  async getTenantToNotification(){
    let arrs = [];
    this.tenantarr = await this.getTenantData().then(res =>{
      res.forEach(element =>{
        arrs.push(element.data());
      });
    });
  return await arrs;
}
}
