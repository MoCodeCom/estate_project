import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { authService } from '../home/home/services/auth.service';
import jwt_decode from "jwt-decode";
import { authriService } from '../home/home/services/authri.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  constructor(
    private http:HttpClient,
    private authService:authService,
    private authriService:authriService)
    {

    this.fatchDataNoFilter();
    this._isAdmin = false;
    this.isAdminFunc();
  }

  ngOnInit(): void {
    this.userDataDetails();

  }
  title = 'estate';
  arrs:any[] = [];
  count:number = 0;
  emailSignIn = 'user email';
  _userData:any;
  _isAdmin:boolean = false;



  async fatchDataNoFilter(){
    return await this.http.get('https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json').subscribe(res =>{
      this.arrs.push(Object.values(res));
      for(let i in this.arrs[0]){
        this.count += 1;
      }
    });
  }

  userDataDetails(){

    if(localStorage.getItem('userData') !== null ){
      this._userData = JSON.parse(localStorage.getItem('userData'));
      if(this._userData){
        let jwt = jwt_decode(this._userData);
        this.emailSignIn = jwt['email'];
        //this.emailSignIn = this._userData.email;
        //this.reload();
      }else{
        this.emailSignIn = '';
      }

    }
  }


  // to check wheather the user is admin or not.
  async isAdminFunc(){
    if(this.authriService.checkUser()){
      this._isAdmin = await this.authriService.checkUser();
      //console.log(this._isAdmin);
    }
  }


  onlogout(){
    /** logout with API */
    this.authService.logout();

    /** logout with auth */
    //this.authService.logoutAuth();
    //window.location.reload();
    this.emailSignIn = '';
  }


}
