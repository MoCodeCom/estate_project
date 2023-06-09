import { Component } from '@angular/core';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent {



  lat =52.483397249897365;
  lng =-1.8842605687335423;
  autocomplete:any;

/*

  initialMap(){
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autoMap'),
      {
        types:['establishment'],
        componentRestrictions:{'country':['UK']},
        fields:['place_id', 'geometry', 'name']
      }
    )
  }
*/

  onMarker(event){

    this.lat = event.coords.lat;
    this.lng = event.coords.leg;


  }
}
