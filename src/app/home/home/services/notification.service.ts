import { Injectable, OnInit } from "@angular/core";
import { db } from "./db.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { getDatabase, orderByKey } from "firebase/database";
import { initializeApp } from "firebase/app";
import { elementAt } from "rxjs";
import { isEqual } from "date-fns/esm";

@Injectable({ providedIn:'root'})
export class notificationService implements OnInit{
  constructor(
    private dbService:db,
    private http:HttpClient){
      //this.getTenantToNotification();

  }
  date = new Date();
  getDataArr =[];

  ngOnInit(): void {

  }

  proparr:any;
  tenantarr:any;
  //tenantArr:any[]=[]
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
    //this.deleteData();
    let propArr = [];
    let tenantArr = [];
    let initialArr:any[] = [];

    //Data for properties ...
    await this.getPorpToNotificaion().then(pres =>{
      pres.forEach(elementProp=>{
        propArr.push(elementProp);

        //Data here..
        /*
        this.getTenantToNotification().then(tres =>{
          tenantArr = [];
          //let noteData:any = null;
          tres.forEach(elementTenant => {

            if(elementTenant['curpostcode'].toString().includes(elementProp['postcode'].toString())){
              //console.log(elementTenant['firstname']);
              tenantArr.push({
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
            }else{
              return null;
            }
          });

          //console.log(tenantArr);

          this.deleteData();
          this.postData(tenantArr);

      });*/


    });

    });

    //Data here.. for tenant

    await this.getTenantToNotification().then(tres =>{

      tres.forEach(ele => initialArr.push(ele))
      tenantArr = [];
      //let noteData:any = null;
      //console.log(tenantArr);
    });

    for(let n of initialArr){
      for(let i of propArr){

        if(n['curpostcode'].toString() === i['postcode'].toString()){
          tenantArr.push({
          //noteData ={
            currentDayDate:new Date().getUTCDate(),
            currentMonthDate:new Date().getUTCMonth(),
            currentYearDate:new Date().getUTCFullYear(),
            tfn:n['firstname'],
            tln:n['lastname'],

            postcode:i['postcode'],
            rent:i['rent'],
            schrent:i['charge'],
            owner:i['owner'],
            date:i['date']
          //}
          });


        }
      }
    }


  this.postData(tenantArr);

}


/*---------- End 2 ---------*/


// get , post and delete date to notification data in database.
  async postData(names:any){

    await this.http.get('https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json').subscribe(res=>{
      let checkData:boolean = false;

      // if no data in db
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
        //when there is data db check to add data just one time on day.
        let dataArr = Object.values(res);
        let day = new Date().getUTCDate();
        let month = new Date().getUTCMonth();
        let year = new Date().getFullYear();
        let bool:boolean = false;

        for(let i =0;i<dataArr.length;i++){

          if(dataArr[i]['currentDayDate'] == day && dataArr[i]['currentMonthDate'] == month && dataArr[i]['currentYearDate'] == year){
            bool = false;
            break;
          }else{
            bool = true;
          }
        }


        //if true add data to db else none
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

  async fetchData(num:number=10){
    await this.http.get('https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json').subscribe(res=>{

      this.getDataArr.push(res);

      // to delete data over num automatically
      if(Object.keys(this.getDataArr[0]).length > num){

        //get object from arr about data
        let initialObjects = this.getDataArr[0];
        //convert object to arr
        let getArr= Object.values(this.getDataArr[0]);

        // sort data according to date item in databse
        getArr.sort((a,b) => Date.parse(b['date']) - Date.parse(a['date']));
        let dataAfterSlice = getArr.slice(0,num);

        // filter initial object to delete data over num or 10
        Object.fromEntries(
          Object.entries(initialObjects).filter(key =>
            {
              if(!Object.values(dataAfterSlice).includes(Object.values(key)[1])){
                this.deleteData(key[0]);
              }
            })
        );
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
