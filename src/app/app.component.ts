import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from './home/home/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http:HttpClient, private authService:authService ){
    this.fatchDataNoFilter();
  }
  title = 'estate';
  arrs:any[] = [];
  count:number = 0;
  login:boolean = false;
  emailSignIn = '';


  async fatchDataNoFilter(){
    return await this.http.get('https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json').subscribe(res =>{
      this.arrs.push(Object.values(res));
      for(let i in this.arrs[0]){
        this.count += 1;
      }
    });
  }

  onLogin(data?:NgForm){
    if(data){
      const email = data.value.email;
      const password = data.value.password;
      this.authService.signin(email, password).subscribe(res =>{
        console.log(res);
        this.emailSignIn = res.email;
        this.login = true;
      }, err =>{
        console.log(err);
      });

    }

  }
}
