import { Injectable } from "@angular/core";

@Injectable({ providedIn:'root'})
export class demo_data{
  constructor(){}

  landlordData():any{
    let landlordList = [
      { id: '0001',
        firstname:'mohammed',
        lastname:'alfadhel',
        email: 'mohammed@gmail.com',
        postcode:'B12 0YL',
        address:'73 conybere, birmingham',
        phone:'07460852462'},

      { id: '0005',
        firstname:'hasan',
        lastname:'alfadhel',
        email: 'hasan@gmail.com',
        postcode:'B15 5YL',
        address:'11 conybere, birmingham',
        phone:'07480852462'},

      { id:'0003',
      firstname:'ahmed',
      lastname:'alfadhel',
      email: 'ahmed@gmail.com',
      postcode:'B30 0ZL',
      address:'1120 startford st, birmingham',
      phone:'07460852300'},

      { id:'0004',
      firstname:'rasha',
      lastname:'almohy',
      email: 'rasha@gmail.com',
      postcode:'B2 2NN',
      address:'20 solihul, birmingham',
      phone:'07462052462'},

      { id: '0005',
        firstname:'mohammed',
        lastname:'alfadhel',
        email: 'mohammed@gmail.com',
        postcode:'B12 0YL',
        address:'73 conybere, birmingham',
        phone:'07460852462'},

      { id: '0006',
        firstname:'hasan',
        lastname:'alfadhel',
        email: 'hasan@gmail.com',
        postcode:'B15 5YL',
        address:'11 conybere, birmingham',
        phone:'07480852462'},

      { id:'0008',
      firstname:'ahmed',
      lastname:'alfadhel',
      email: 'ahmed@gmail.com',
      postcode:'B30 0ZL',
      address:'1120 startford st, birmingham',
      phone:'07460852300'},

      { id:'0009',
      firstname:'rasha',
      lastname:'lmohy',
      email: 'rasha@gmail.com',
      postcode:'B2 2NN',
      address:'20 solihul, birmingham',
      phone:'07462052462'},

    ]

    return landlordList;

  }

}
