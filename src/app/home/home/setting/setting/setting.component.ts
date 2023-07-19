import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit{
  constructor(private http:HttpClient){}

  //zooplaData:any = "https://api.zoopla.co.uk/api/v1/area_value_graphs.js?area=w12&output_type=outcode&api_key=home_values_graph_url";

  ngOnInit(): void {
    /*
    let data = this.http.get(this.zooplaData);
    data.subscribe((res)=>{
      console.log(res);
    });*/
  }
}
