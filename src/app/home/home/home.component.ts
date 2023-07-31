import { Component, OnInit} from '@angular/core';
import { notificationService } from './services/notification.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private noteService:notificationService,private http:HttpClient){

    // to post data in database.
    this.noteService.getTenantNote();

    //to filter and sort data in database when refresh page.
    this.noteService.fetchData();

    //Get data form noteficaion database;
    this.fatchDataNoFilter();
  }

  arrs:any = [];
  count:number = 0;
  /*
  dayDate = new Date().getUTCDate();
  monthDate = new Date().getUTCMonth();*/

  ngOnInit():void{
  }



  postDATA(){
    this.noteService.deleteData();
  }

  async fetchDATA(){
    await this.noteService.fetchData().then(res =>{
      //console.log(res);
    }).catch(err =>{
      //console.log(err);
    });

  }

  async fatchDataNoFilter(){
    return await this.http.get('https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json').subscribe(res =>{
      this.arrs.push(Object.values(res));
    });


  }

}

/*
"budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
*/
