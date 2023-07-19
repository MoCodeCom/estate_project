import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient, ){
    this.fatchDataNoFilter();
  }
  title = 'estate';
  arrs:any[] = [];
  count:number = 0;



  async fatchDataNoFilter(){
    return await this.http.get('https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json').subscribe(res =>{
      this.arrs.push(Object.values(res));
      for(let i in this.arrs[0]){
        this.count += 1;
      }
    });
  }
}
