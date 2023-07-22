import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { elements } from 'chart.js';
import { authService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnDestroy{
  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();
  @ViewChild('password',{ static:true}) password:ElementRef;
  @ViewChild('confirmPassword',{ static:true}) confirmPassword:ElementRef;
  passwordNotMatch = false;

  constructor(private elementRef:ElementRef,
              private authService:authService
    ){}


  onSubmit(data:NgForm){
    if(!data.valid){
      return;
    }

    if(this.password.nativeElement.value === this.confirmPassword.nativeElement.value){

      const email = data.value.email;
      const password = data.value.password;
      this.authService.signup(email, password).subscribe(res =>{
        console.log(res);
      }, err =>{
        console.log(err);
      });
      this.onClose();
    }else{
      this.passwordNotMatch = true;
    }

    data.reset();

  }

  onClose(){
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit();
  }

}
