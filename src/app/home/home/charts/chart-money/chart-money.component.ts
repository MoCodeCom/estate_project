import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { chartService } from '../../services/chart.service';
Chart.register(...registerables);

@Component({
  selector: 'app-chart-money',
  templateUrl: './chart-money.component.html',
  styleUrls: ['./chart-money.component.css']
})
export class ChartMoneyComponent implements OnInit{

  constructor(private chartService:chartService){}
  date = new Date().getFullYear();


  ngOnInit(): void {
    this.chart_2();
  }



  async chart_2(){
    let arr ={
      1:[],2:[],3:[],4:[],5:[],6:[],
      7:[],8:[],9:[],10:[],11:[],12:[]
      };


    let totalAmounts = [0,0,0,0,0,0,0,0,0,0,0,0];
    let pay =[0,0,0,0,0,0,0,0,0,0,0,0];
    let rec =[0,0,0,0,0,0,0,0,0,0,0,0];

    //get data form moneyDb database
    this.chartService.onGetMoneyData().then(res =>{

      res.forEach(ele =>{
        let d = new Date(ele['date']);
          if(this.date == d.getFullYear()){
            switch(d.getMonth() + 1){
              case 1:
                arr[1].push(ele);
                totalAmounts[0] += (parseInt(ele['totalamount']));
                let trans1 = ele['trans'];
                trans1.forEach(element => {
                  if(element['amount'] <= 0){
                    pay[0] += element['amount'];
                  }else{
                    rec[0] += element['amount'];
                  }
                });
                break;
              case 2:
                arr[2].push(ele);
                totalAmounts[1] += (parseInt(ele['totalamount']));
                let trans2 = ele['trans'];
                trans2.forEach(element => {
                  if(element['amount'] <= 0){
                    pay[1] += element['amount'];
                  }else{
                    rec[1] += element['amount'];
                  }
                });
                break;
              case 3:
                arr[3].push(ele);
                totalAmounts[2] += (parseInt(ele['totalamount']));
                let trans3 = ele['trans'];
                trans3.forEach(element => {
                  if(element['amount'] <= 0){
                    pay[2] += element['amount'];
                  }else{
                    rec[2] += element['amount'];
                  }
                });
                break;
              case 4:
                arr[4].push(ele);
                totalAmounts[3] += (parseInt(ele['totalamount']));
                let trans4 = ele['trans'];
                trans4.forEach(element => {
                  if(element['amount'] <= 0){
                    pay[3] += element['amount'];
                  }else{
                    rec[3] += element['amount'];
                  }
                });
                break;
              case 5:
                arr[5].push(ele);
                totalAmounts[4] += (parseInt(ele['totalamount']));
                let trans5 = ele['trans'];
                trans5.forEach(element => {
                  if(element['amount'] <= 0){
                    pay[4] += element['amount'];
                  }else{
                    rec[4] += element['amount'];
                  }
                });
                break;
              case 6:
                arr[6].push(ele);
                totalAmounts[5] += (parseInt(ele['totalamount']));
                let trans6 = ele['trans'];
                trans6.forEach(element => {
                  if(element['amount'] <= 0){
                    pay[5] += element['amount'];
                  }else{
                    rec[5] += element['amount'];
                  }
                });
                break;
              case 7:
                arr[7].push(ele);
                totalAmounts[6] += (parseInt(ele['totalamount']));
                let trans7 = ele['trans'];
                trans7.forEach(element => {
                  if(element['amount'] <= 0){
                    pay[6] += element['amount'];
                  }else{
                    rec[6] += element['amount'];
                  }
                });
                break;
              case 8:
                arr[8].push(ele);
                totalAmounts[7] += (parseInt(ele['totalamount']));
                let trans8 = ele['trans'];
                trans8.forEach(element => {
                  if(element['amount'] <= 0){
                    pay[7] += element['amount'];
                  }else{
                    rec[7] += element['amount'];
                  }
                });
                break;
              case 9:
                arr[9].push(ele);
                totalAmounts[8] += (parseInt(ele['totalamount']));
                let trans9 = ele['trans'];
                trans9.forEach(element => {
                  if(element['amount'] <= 0){
                    pay[8] += element['amount'];
                  }else{
                    rec[8] += element['amount'];
                  }
                });
                break;
              case 10:
                arr[10].push(ele);
                totalAmounts[9] += (parseInt(ele['totalamount']));
                let trans10 = ele['trans'];
                trans10.forEach(element => {
                  if(element['amount'] <= 0){
                    pay[9] += element['amount'];
                  }else{
                    rec[9] += element['amount'];
                  }
                });
                break;
              case 11:
                arr[11].push(ele);
                totalAmounts[10] += (parseInt(ele['totalamount']));
                let trans11 = ele['trans'];
                trans11.forEach(element => {
                  if(element['amount'] <= 0){
                    pay[10] += element['amount'];
                  }else{
                    rec[10] += element['amount'];
                  }
                });
                break;
              case 12:
                arr[12].push(ele);
                totalAmounts[11] += (parseInt(ele['totalamount']));
                let trans12 = ele['trans'];
                trans12.forEach(element => {
                  if(element['amount'] <= 0){
                    pay[11] += element['amount'];
                  }else{
                    rec[11] += element['amount'];
                  }
                });
                break;
            }
        }
      });

    new Chart("LineChart", {
      type: 'line', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ["January",
                 "February",
                 "March",
                 "April",
                 "May",
                 "June",
                 "July",
                 "August",
                 "September",
                 "October",
                 "November",
                 "December"],
	       datasets: [
          {
            label: "Income",
            data:totalAmounts,
            backgroundColor: 'blue'
          }
          ,
          {
            label: "Payment",
            data: pay,
            backgroundColor: 'red'
          },
          {
            label: "Receive",
            data: rec,
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio:1.75
      }

    });
    });

  }

}
