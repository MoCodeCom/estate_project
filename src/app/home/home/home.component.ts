import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlotlyService } from 'angular-plotly.js';
import { PlotlyService_1 } from './services/main_Chart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
@ViewChild('chartRef',{static:true})myPlot:ElementRef;


  constructor(
    private homeChart:PlotlyService,
    private barChart:PlotlyService_1){}

  ngOnInit():void{

    let x:number[] = [1,2,3,4,5];
    let y:number[] = [1,2,3,4,5];
    this.barChart.plotLine("Line Plot",'plot',x,y);
    this.myPlot.nativeElement.value = "test";
    this.chart();

  }

  chart(){
    const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
    const yArray = [55, 49, 44, 24, 15];

    const data = [{
      x:xArray,
      y:yArray,
      type:"bar"
    }];

    const layout = {title:"World Wide Wine Production"};

    //this.homeChart.newPlot(this.myPlot, data, layout);
  }


}
