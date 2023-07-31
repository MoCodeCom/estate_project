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

      // chect wheather the user is active or not
      await this.dbService.getData('usersDb').then(
        res =>{
          res.forEach(ele =>{
            if(ele.data()['email'] == data.value.email &&
               ele.data()['password'] == data.value.password &&
               ele.data()['status'] == 'active')
               {
              this.authService.signin(email, password).subscribe(res =>{
                this.emailSignIn = res.email;
                checkEmail = res.email;
                this.loading = false;
              }, err =>{
                this.errorText = err;
                this.loading = false;
              });
            }else{
              this.errorText = 'This account is unactivated.';
              this.loading = false;
            }
          })
        }
      );

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



    }else{
      return;
    }
    data.reset();
  }

  ngOnDestroy(): void {
    //to reload page after one min to get admin user...
    setTimeout(() => {
      window.location.reload();
    }, 100);

  }
}
