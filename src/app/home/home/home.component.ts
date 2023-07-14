import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlotlyService } from 'angular-plotly.js';
import { PlotlyService_1 } from './services/main_Chart.service';
import { notificationService } from './services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private noteService:notificationService){
    this.arrProp = this.noteService.getPorpNotificaion();
    this.arrProp.then(res =>{
      res.forEach(element => {

        this.arrs.push(element);
      });
    });

    this.arrTenant = this.noteService.getTenantToNotification();
    this.arrTenant.then(res =>{
      res.forEach(element =>{

        this.arrs.push(element);
      })
    });
  }
  arrProp :any;
  arrTenant:any;
  arrs:any =[];

  //date = new Date();
  ngOnInit():void{
    //console.log(this.arrs)
  }

  postDATA(){
    let dateNow = new Date();
    this.noteService.postData({fname:'ahmed', lname:'alfadhel', date:dateNow});
  }

  async fetchDATA(){
    await this.noteService.fetchData().then(res =>{
      //console.log(res);
    }).catch(err =>{
      //console.log(err);
    });

  }

}
