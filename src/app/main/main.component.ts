import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { authService } from '../home/home/services/auth.service';
import jwt_decode from "jwt-decode";
import { authriService } from '../home/home/services/authri.service';
import { db } from '../home/home/services/db.service';
import { Router } from '@angular/router';
import { routeService } from '../home/home/services/route.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  @ViewChild('sidebar',{static:true})sidebarRef:ElementRef<HTMLInputElement>;
  @ViewChild('dropback',{static: true})dropbackRef:ElementRef<HTMLInputElement>;

  constructor(
    private http:HttpClient,
    private authService:authService,
    private authriService:authriService,
    private dbService:db,
    private router:Router,
    private routeService:routeService
    )
    {

    this.fatchDataNoFilter();
    this._isAdmin = false;
    this.isAdminFunc();
  }

  ngOnInit(): void {
    this.userDataDetails();
    this.onstatus();
  }
  title = 'estate';
  arrs:any[] = [];
  count:number = 0;
  emailSignIn = 'user email';
  statusSinIn = 'active';
  authoriSinIn = '';
  _userData:any;
  _isAdmin:boolean = false;
  _isAuthori:any;



  async fatchDataNoFilter(){
    return await this.http.get('https://estateagent-2da55-default-rtdb.europe-west1.firebasedatabase.app/posts.json').subscribe(res =>{
      this.arrs.push(Object.values(res));
      for(let i in this.arrs[0]){
        this.count += 1;
      }
    });
  }

  async userDataDetails(){

    if(localStorage.getItem('userData') !== null ){
      this._userData = JSON.parse(localStorage.getItem('userData'));
      if(this._userData){
        let jwt = jwt_decode(this._userData);
        this.emailSignIn = jwt['email'];
        await this.dbService.getData('usersDb').then(res =>{
          res.forEach(ele =>{
            if(ele.data()['email'] == this.emailSignIn){
              //console.log(ele.data()['authori']);
              ele.data()['authori'] = this._isAuthori;
            }
          });
        });

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

  onstatus(){
    if(localStorage.getItem('userData') !== null ){
      this._userData = JSON.parse(localStorage.getItem('userData'));
      if(this._userData){
        let jwt = jwt_decode(this._userData);
        this.emailSignIn = jwt['email'];
        this.dbService.getData('usersDb').then(res =>{
          res.forEach(ele =>{
            if(ele.data()['email'] == this.emailSignIn){
              ele.data()['authori'] = this._isAuthori;
              this.routeService.RouteEdit =ele.data()['authori'];
              //this.router.navigate(['/landlords'],{queryParams:{status:ele.data()['status']},fragment:ele.data()['authori']});
            }
          });
        });

      }else{
        this.emailSignIn = '';
      }

    }

  }

  onShowsidebar(){
    //alert('side');
    if(getComputedStyle(this.sidebarRef.nativeElement).getPropertyValue('left') === '-250px'){
      this.sidebarRef.nativeElement.style.left = '0px';
      this.sidebarRef.nativeElement.style.zIndex = '60';
      this.dropbackRef.nativeElement.style.display = 'unset';
    }else{
      this.sidebarRef.nativeElement.style.left = '-250px';
    }

  }

  onCloseShowsidebar(){
    this.sidebarRef.nativeElement.style.left = '-250px';
    this.dropbackRef.nativeElement.style.display = 'none';
  }

  onNav(){
    if(getComputedStyle(this.sidebarRef.nativeElement).getPropertyValue('left') == '0px'){
      this.sidebarRef.nativeElement.style.left = '-250px';
      this.dropbackRef.nativeElement.style.display = 'none';
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
