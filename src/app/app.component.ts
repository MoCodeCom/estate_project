import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from './home/home/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authService:authService){

  }
  ngOnInit(): void {
    this.authService.autoSignin();
  }

  /*
  constructor(private http:HttpClient, private authService:authService ){
    this.fatchDataNoFilter();
  }

  title = 'estate';
  arrs:any[] = [];
  count:number = 0;
  login:boolean = false;
  emailSignIn = '';
  loading = false;
  errorText = null;


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
      this.loading = true;
      this.authService.signin(email, password).subscribe(res =>{
        this.emailSignIn = res.email;
        this.loading = false;
        this.login = true;
      }, err =>{
        this.errorText = err;
        this.loading = false;
      });
    }else{
      return;
    }
    data.reset();
  }

  onlogout(){
    this.authService.logout();
  }*/
  ///*"lint": "eslint --ext .js,.ts .",*/ from functions package.json
}
