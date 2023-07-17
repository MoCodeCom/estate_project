import { Injectable, OnInit } from "@angular/core";
import { db } from "./db.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
import { elementAt } from "rxjs";
import { isEqual } from "date-fns/esm";

@Injectable({ providedIn:'root'})
export class notificationService implements OnInit{
  constructor(
    private dbService:db,
    private http:HttpClient){
    //this.fetchData();
    //this.getTenantNote();
  }
  date = new Date();
  arr =[];

  ngOnInit(): void {}

  proparr:any;
  tenantarr:any;
  tenantArr:any[]=[]
/*----------- 1 -------------*/
  // To get date from database..
  async getPropertyData():Promise<any>{
    return await this.dbService.getData('propertyDb');
  }

  async getTenantData():Promise<any>{
    return await this.dbService.getData('tenantDb');
  }

  //***********End********* */
/*----------- End 1 ----------*/

  /*--------- 2 ------------*/
  //get porperty data.
  async getPorpToNotificaion(){
    let day = this.date.getUTCDate();
    let arrs = [];

    await this.getPropertyData().then(res =>{
      res.forEach(element => {
        let dateRent = new Date(element.data()['date']);
        let propDay = dateRent.getDate();
        if(day === propDay){
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

  async getTenantNote():Promise<any>{

    let propArr = [];
    this.tenantArr =[];
    await this.getPorpToNotificaion().then(pres =>{

      pres.forEach(elementProp=>{
        propArr.push(elementProp);

        //Data here..

        this.getTenantToNotification().then(tres =>{
          this.tenantArr = [];
          //let noteData:any = null;
          tres.forEach(elementTenant => {

            if(elementTenant['curpostcode'].toString().includes(elementProp['postcode'].toString())){
              //console.log(elementTenant['firstname']);
              this.tenantArr.push({
              //noteData ={
                currentDayDate:new Date().getUTCDate(),
                currentMonthDate:new Date().getUTCMonth(),
                currentYearDate:new Date().getUTCFullYear(),
                tfn:elementTenant['firstname'],
                tln:elementTenant['lastname'],

                postcode:elementProp['postcode'],
                rent:elementProp['rent'],
                schrent:elementProp['charge'],
                owner:elementProp['owner'],
                date:elementProp['date']
              //}
              });
              //this.postData(noteData);
            }else{
              return null;
            }

          });
          let noteDate = new Date();
          //console.log(noteDate);
          this.postData(this.tenantArr);
      });

    });

    });
    }


/*---------- End 2 ---------*/


// get , post and delete date to notification data in database.
  async postData(names:any){
    //console.log(names);
    await this.http.get('https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json').subscribe(res=>{
      let checkData:boolean = false;
      if(res === null){
        checkData = true;
        names.forEach(element => {
          this.http
                .post('https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json',element)
                .subscribe(res =>{
                  //to get item's name in db.
                  //console.log(res);
                });
        })
      }else{
        //console.log(res);
        let dataArr = Object.values(res);
        let day = new Date().getUTCDate();
        let month = new Date().getUTCMonth();
        let year = new Date().getFullYear();
        let bool:boolean = false;

        for(let i =0;i<dataArr.length;i++){

          if(dataArr[i]['currentDayDate'] == day && dataArr[i]['currentMonthDate'] == month && dataArr[i]['currentYearDate'] == year){
            //console.log(bool);
            bool = false;
            break;
          }else{
            bool = true;
          }
        }
        console.log(bool);

        /*
        dataArr.forEach(res =>{
          if(res['currentDayDate'] == day && res['currentMonthDate'] == month && res['currentYearDate'] == year){
            //console.log(bool);
            return;
          }else{
            bool = true;
            console.log(bool);
          }
        });*/
        if(bool){
          names.forEach(element => {
            this.http
                  .post('https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json',element)
                  .subscribe(res =>{
                    //to get item's name in db.
                  });
          })
        }
      }
    });



  }

  async fetchData(num:number=4){
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

  async deleteData(itemName?){
    if(itemName == null){
      await this.http.delete(`https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json`)
      .subscribe(res =>{});
    }else{
      await this.http.delete(`https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts/${itemName}.json`)
      .subscribe(res=>{});
    }
  }
  //***********End*********** */








}
