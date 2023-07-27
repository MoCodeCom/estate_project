import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from '../home/home/services/auth.service';
import { Router } from '@angular/router';
import { db } from '../home/home/services/db.service';
import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css'],

})
export class LoginAuthComponent implements OnDestroy{

  constructor(
      private authService:authService,
      private dbService:db,
      private router:Router){}

  emailSignIn = '';
  loading = false;
  errorText = null;


  async onLogin(data?:NgForm){
    if(data){

      const email = data.value.email;
      const password = data.value.password;
      this.loading = true;
      let checkEmail = '';

      //console.log(email +' --  '+ password);

      /** login with angular auth */
      /*
      this.authService.signinAuth(email, password)
      .then((res) =>{
        this.loading = false;
        //console.log();
      })
      .catch(err => {
        this.errorText = err;
        this.loading = false;
      });*/

      /** login with API */

      await this.authService.signin(email, password).subscribe(res =>{

        this.emailSignIn = res.email;
        checkEmail = res.email;
        this.loading = false;

        /*
        this.dbService.getData('usersDb').then(res =>{
          res.forEach(ele =>{
            if(ele.data()['email'] == checkEmail && ele.data()['position'] == 'Admin'){
              //console.log('true');

              //console.log(token);
              //let decode = jwt_decode(token);
              //console.log(decode);
              //localStorage.setItem('position',JSON.stringify(ele.data()['position']));

            }else{
              //console.log('false');
              //localStorage.setItem('position',JSON.stringify(ele.data()['position']));
            }
          })})*/
      }, err =>{
        this.errorText = err;
        this.loading = false;
      });

    }else{
      return;
    }
    data.reset();
  }

  ngOnDestroy(): void {
    //to reload page after one min to get admin user...
    setTimeout(() => {
      window.location.reload();
    }, 1000);

  }
}
