import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { db } from '../../services/db.service';
import { NgForm } from '@angular/forms';
import { authService } from '../../services/auth.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnDestroy{
  @Input() closeForm:boolean;
  @Output() close = new EventEmitter<void>();
  @ViewChild('password',{ static:true}) password:ElementRef;
  @ViewChild('confirmPassword',{ static:true}) confirmPassword:ElementRef;
  passwordNotMatch = false;
  displayName = ['Admin','User'];

  constructor(private elementRef:ElementRef,
              private authService:authService,
              private userDbService:db
    ){}
    user:any;


  async onSubmit(data:NgForm){
    if(!data.valid){
      return;
    }

    if(this.password.nativeElement.value === this.confirmPassword.nativeElement.value){

      const email = data.value.email;
      const password = data.value.password;
      const position = data.value.userPosition;
      const username = data.value.username;
      const phonenumber = data.value.phonenumber;
      //let idToken:any = '';

      // adding user auth in auth database.
      await this.authService.signupAuth(email, password).then(res =>{
         let _uid = res.user.uid;
         res.user.getIdToken().then(tok =>{
          let auth = '';
          if(position == 'Admin'){
            auth = 'yes';
          }else{
            auth = 'none';
          }

          this.user = {
            email:email,
            password:password,
            username:username,
            phonenumber:phonenumber,
            position:position,
            idToken:tok,
            uid:_uid,
            status:'active',
            authori:auth
          }


          this.userDbService.addData(this.user, 'usersDb');
        });
      });
      /*

      console.log(idToken);

      this.user = {
        email:email,
        password:password,
        username:username,
        phonenumber:phonenumber,
        position:position,
        idToken:idToken
      }*/

      /*
      this.authService.signup(email, password, displayname).subscribe(res =>{
        console.log(res);
      }, err =>{
        console.log(err);
      });*/



      // adding users details in firebase store databaser.
      //this.userDbService.addData(this.user, 'usersDb');
      this.onClose();
    }else{
      this.passwordNotMatch = true;
    }


    data.reset();
    this.onClose();

  }

  onClose(){
    this.user = null;
    this.ngOnDestroy();
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
    this.close.emit();
  }

}
