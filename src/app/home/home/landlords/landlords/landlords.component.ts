//import { google } from '@agm/core/services/google-maps-types';
import { Component, ElementRef, OnDestroy, OnInit} from '@angular/core';
import { demo_data } from '../../services/demo_data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landlords',
  templateUrl: './landlords.component.html',
  styleUrls: ['./landlords.component.css']
})
export class LandlordsComponent implements OnInit{
  constructor(
    private dataService:demo_data,
    private router:Router,
    private elementRef:ElementRef
    ){}
  ngOnInit(): void {
    this.onLandlordTableList();
    this.elementRef.nativeElement;


  }

  lat =52.483397249897365;
  lng =-1.8842605687335423;
  landlordTableList = [];
  filterString:string;
  addingLandlordAllowed:boolean=false;

  onMarker(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.leg;
  }

  onLandlordTableList(){
    this.landlordTableList = this.dataService.landlordData()
  }

  add_landlord(){
    //this.roter.navigateByUrl('landlords/addlandlord');
    this.addingLandlordAllowed = true;
  }

  onReloadPg(){
    this.addingLandlordAllowed = false;
  }

}
