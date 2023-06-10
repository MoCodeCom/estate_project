import { Injectable } from "@angular/core";

@Injectable({ providedIn:'root'})
export class demo_data{
  constructor(){}

  landlordData():any{
    let landlordList = [
      { id: '0001',
        name:'mohammed',
        address:'B12 0YL',
        phone:'07460852462'},

      { id: '0005',
        name:'ali',
        address:'B12 0YL',
        phone:'07460852462'},

      { id:'0002',
        name:'ahmed',
        address:'B28 0AF',
        phone:'07444452462'},

      { id:'0003',
        name:'hasan',
        address:'B30 0AZ',
        phone:'07460852555'},

      { id:'0004',
        name:'rasha',
        address:'B1 0KK',
        phone:'07460999462'},
        { id: '0001',
        name:'mohammed',
        address:'B12 0YL',
        phone:'07460852462'},

      { id: '0005',
        name:'ali',
        address:'B12 0YL',
        phone:'07460852462'},

      { id:'0002',
        name:'ahmed',
        address:'B28 0AF',
        phone:'07444452462'},

      { id:'0003',
        name:'hasan',
        address:'B30 0AZ',
        phone:'07460852555'},

      { id:'0004',
        name:'rasha',
        address:'B1 0KK',
        phone:'07460999462'},
    ]

    return landlordList;

  }

}
