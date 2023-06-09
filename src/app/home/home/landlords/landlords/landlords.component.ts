//import { google } from '@agm/core/services/google-maps-types';
import { Component} from '@angular/core';

@Component({
  selector: 'app-landlords',
  templateUrl: './landlords.component.html',
  styleUrls: ['./landlords.component.css']
})
export class LandlordsComponent {



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
