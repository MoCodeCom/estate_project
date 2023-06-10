//import { google } from '@agm/core/services/google-maps-types';
import { Component, OnInit} from '@angular/core';
import { demo_data } from '../../services/demo_data.service';

@Component({
  selector: 'app-landlords',
  templateUrl: './landlords.component.html',
  styleUrls: ['./landlords.component.css']
})
export class LandlordsComponent implements OnInit{
  constructor(private dataService:demo_data){}
  ngOnInit(): void {
    this.onLandlordTableList();
    //console.log(this.landlordTableList);
  }

  lat =52.483397249897365;
  lng =-1.8842605687335423;
  landlordTableList = [];
  filterString:string;

  onMarker(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.leg;
  }

  onLandlordTableList(){
    this.landlordTableList = this.dataService.landlordData()
  }

}
