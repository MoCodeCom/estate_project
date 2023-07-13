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
  constructor(private noteService:notificationService){}
  arr :any =[];
  date = new Date();
  ngOnInit():void{
    this.getPorpNotificaion();
  }

  getPorpNotificaion(){
    console.log(this.date);
    let year = this.date.getUTCFullYear();
    let month = this.date.getUTCMonth() + 1;
    let day = this.date.getUTCDate();

    //let dateStr = new Date(year +'-'+ month +'-'+ day);
    //console.log(dateStr);
    this.arr = this.noteService.getPropertyData().then(res =>{
      res.forEach(element => {

        let dateRent = new Date(element.data()['date']);
        //console.log(dateRent.toDateString());
        if(this.date < dateRent){
          console.log(element.data());
        }

      });
    });

  }




}
