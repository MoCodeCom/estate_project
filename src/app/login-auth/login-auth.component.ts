import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { authService } from '../home/home/services/auth.service';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css']
})
export class LoginAuthComponent {
  constructor(private authService:authService){}
  emailSignIn = '';
  loading = false;
  errorText = null;

  onLogin(data?:NgForm){
    if(data){
      const email = data.value.email;
      const password = data.value.password;
      this.loading = true;
      this.authService.signin(email, password).subscribe(res =>{
        this.emailSignIn = res.email;
        this.loading = false;

      }, err =>{
        this.errorText = err;
        this.loading = false;
      });
    }else{
      return;
    }
    data.reset();
  }
}
