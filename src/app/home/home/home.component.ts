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
    this.noteService.getTenantNote();
    //this.fetchDATA();

    //console.log(this.arrs);
    /*this.arrs.then(res =>{
      res.forEach(element => {
        console.log(element.data());
      });
    });*/
  }


  arrProp :any;
  arrTenant:any;
  arrs:any =[];
  ngOnInit():void{
    //console.log(this.arrs);
  }

  postDATA(){
    this.noteService.deleteData();
  }

  async fetchDATA(){
    await this.noteService.fetchData().then(res =>{
      //console.log(res);
    }).catch(err =>{
      //console.log(err);
    });

  }

}
