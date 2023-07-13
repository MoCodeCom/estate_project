import { Injectable, OnInit } from "@angular/core";
import { db } from "./db.service";

@Injectable({ providedIn:'root'})
export class notificationService implements OnInit{
  constructor(private dbService:db){}
  ngOnInit(): void {}

  async getPropertyData():Promise<any>{
    return await this.dbService.getData('propertyDb');
  }

  getTenentData(){

  }

  getDateToReceiveRent(){

  }

  getDateToPayRent(){

  }
}
