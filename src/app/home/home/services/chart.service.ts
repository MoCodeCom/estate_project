import { Injectable, OnInit } from "@angular/core";
import { db } from "./db.service";
import { collection } from "firebase/firestore";

@Injectable({ providedIn:'root'})
export class chartService implements OnInit{
  constructor(
    private dbService:db
  ){}
  //landlordCounts:number=0;
  //tenantCounts:number=0;
  //otherCounts:number=0;
  //propertyCounts:number=0;

  ngOnInit(): void {
    //this.onLandlordTableList();
  }


  async onGetCountTableList(dbName:string){
    let count = 0;
    await this.dbService.getData(dbName).then(
      res =>{
        //this.landlordCounts = 0;
        res.forEach(() =>{
          count += 1;
        });
      }
    );
    return count;
  }

  async onGetMoneyData(){
    let datas =[];
    await this.dbService.getData('moneyDb')
    .then(res => {
        res.forEach(ele =>{
          datas.push(ele.data());
          //console.log(ele.data());
        })
      }
    ).catch(err =>{
      console.log(err)
    });

    //console.log(datas);
    return datas;
  }



}
