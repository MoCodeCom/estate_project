import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { authService } from '../home/home/services/auth.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  constructor(private http:HttpClient, private authService:authService){
    this.fatchDataNoFilter();
  }

  ngOnInit(): void {
    this.userDataDetails();
    //location.reload();
  }
  title = 'estate';
  arrs:any[] = [];
  count:number = 0;
  emailSignIn = '';


  async fatchDataNoFilter(){
    return await this.http.get('https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json').subscribe(res =>{
      this.arrs.push(Object.values(res));
      for(let i in this.arrs[0]){
        this.count += 1;
      }
    });
  }

  userDataDetails(){

    let _userData = JSON.parse(localStorage.getItem('userData'));
    this.emailSignIn = _userData.email;
  }

  onlogout(){
    this.authService.logout();
    this.emailSignIn = '';
  }
}
