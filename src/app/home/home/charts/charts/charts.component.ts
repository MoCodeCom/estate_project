import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { chartService } from '../../services/chart.service';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor(private chartService:chartService){

  }
  landlordCounts:number = 0;

  ngOnInit(): void {
    this.chart_1();
    this.chart_2();
  }

  async chart_1(){
    let ln:number = 0;
    let tn:number = 0;
    let on:number = 0;
    let pn:number = 0;

    await this.chartService.onGetCountTableList('landlordDb').then(
      res =>{
        ln = res;
      });

    await this.chartService.onGetCountTableList('tenantDb').then(
      res =>{
        tn = res;
      }
    )

    await this.chartService.onGetCountTableList('otherDb').then(
      res =>{
        on = res;
      });

    await this.chartService.onGetCountTableList('propertyDb').then(
      res =>{
        pn = res;
      });

    new Chart(
      "myChart",
      {
      type: 'bar',
      data: {
          labels: [`${ln } Landlords`,
                   `${tn } Tenants`,
                   `${on } Others`,
                   `${pn } Properties`],
          datasets: [{
              label: 'Company Estate Agent',
              data: [ln, tn, on, pn],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)'

              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

  async chart_2(){
    let arr ={
      1:[],2:[],3:[],4:[],5:[],6:[],
      7:[],8:[],9:[],10:[],11:[],12:[]
      };

    let totalAmounts = [0,0,0,0,0,0,0,0,0,0,0,0];
    this.chartService.onGetMoneyData().then(res =>{
      res.forEach(ele =>{
        let d = new Date(ele['date']);
        switch(d.getMonth()){
          case 1:
            arr[1].push(ele);
            totalAmounts[0] += (parseInt(ele['totalamount']));
            break;
          case 2:
            arr[2].push(ele);
            totalAmounts[1] += (parseInt(ele['totalamount']));
            break;
          case 3:
            arr[3].push(ele);
            totalAmounts[2] += (parseInt(ele['totalamount']));
            break;
          case 4:
            arr[4].push(ele);
            totalAmounts[3] += (parseInt(ele['totalamount']));
            break;
          case 5:
            arr[5].push(ele);
            totalAmounts[4] += (parseInt(ele['totalamount']));
            break;
          case 6:
            arr[6].push(ele);
            totalAmounts[5] += (parseInt(ele['totalamount']));
            break;
          case 7:
            arr[7].push(ele);
            totalAmounts[6] += (parseInt(ele['totalamount']));
            break;
          case 8:
            arr[8].push(ele);
            totalAmounts[7] += (parseInt(ele['totalamount']));
            break;
          case 9:
            arr[9].push(ele);
            totalAmounts[8] += (parseInt(ele['totalamount']));
            break;
          case 10:
            arr[10].push(ele);
            totalAmounts[9] += (parseInt(ele['totalamount']));
            break;
          case 11:
            arr[11].push(ele);
            totalAmounts[10] += (parseInt(ele['totalamount']));
            break;
          case 12:
            arr[12].push(ele);
            totalAmounts[11] += (parseInt(ele['totalamount']));
            break;
        }
      });
    //console.log(totalAmounts);

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
            //data: ['467','576', '572', '79', '92',
						//		 '574', '573', '576'],
            data:totalAmounts,
            backgroundColor: 'blue'
          }
          //,
          //{
          //  label: "Profit",
          //  data: ['542', '542', '536', '327', '17',
					//				 '0.00', '538', '541'],
          //  backgroundColor: 'limegreen'
          //}
        ]
      },
      options: {
        aspectRatio:1.75
      }

    });
    });




  }



}
