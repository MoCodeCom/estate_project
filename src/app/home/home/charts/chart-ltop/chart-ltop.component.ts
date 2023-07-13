import { Component, OnInit } from '@angular/core';
import { chartService } from '../../services/chart.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-ltop',
  templateUrl: './chart-ltop.component.html',
  styleUrls: ['./chart-ltop.component.css']
})
export class ChartLTOPComponent implements OnInit {
  constructor(private chartService:chartService){}
  ngOnInit(): void {
    this.chart_1();
  }

  async chart_1(){
    let arr = [0,0,0,0];
    let dbs = ['landlordDb','tenantDb','otherDb','propertyDb'];


    for(let i=1;i<5;i++){
      await this.chartService.onGetCountTableList(dbs[i-1]).then(
        res =>{
          arr[i-1] = res;
        });
    }

    new Chart(
      "myChart",
      {
      type: 'bar',
      data: {
          labels: [`${arr[0] } Landlords`,
                   `${arr[1] } Tenants`,
                   `${arr[2] } Others`,
                   `${arr[3] } Properties`],
          datasets: [{
              label: 'Company Estate Agent',
              data: [arr[0], arr[1], arr[2], arr[3]],
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

}
