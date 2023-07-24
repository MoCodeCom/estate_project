import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { AuthResponseData } from "../modules/AuthResponseData";
import { Subject, catchError, tap, throwError } from "rxjs";
import { User } from "../models/User";
import { Router } from "@angular/router";




@Injectable({ providedIn:'root'})
export class authService implements OnInit{

  constructor(private http:HttpClient, private router:Router){}
  ngOnInit(): void {
    console.log(this.user);
  }

  user = new Subject<User>();
  tokenExpirationTimer:any;


  /* function signUp */
  signup(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOsw9i6F61js3aCbwPj5rsEFnApjQnlEQ',{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(
       catchError(this.handleError),
       tap(res =>{
        this.handleAuth(res.email, res.localId, res.idToken, res.expiresIn);
       }));
  }


  signin(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOsw9i6F61js3aCbwPj5rsEFnApjQnlEQ',{
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(catchError(this.handleError),
    tap(res =>{
      this.handleAuth(res.email, res.localId, res.idToken,res.expiresIn);
      this.router.navigate(['/home']);
     }));
  }

  handleAuth(email:string, id:string, token:string, expire:string){
    const expirationDate = new Date(new Date().getTime() + parseInt(expire) * 1000);
    const user = new User(email, id, token, expirationDate);
    this.user.next(user);
    this.autoLogout(parseInt(expire) * 1000);
    localStorage.setItem("userData",JSON.stringify(user));
  }

  autoSignin(){
    const userData:{
      email:string;
      id:string;
      _token:string;
      _tokenExpirationDate:string;
    } = JSON.parse(localStorage.getItem('userData'));

    if(!userData){
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
      );

    if(loadedUser.token){
      this.user.next(loadedUser);
      const expirationDuration = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }

  logout(){
    this.user.next(null);
    this.router.navigate(['/loginAuth']);
    localStorage.removeItem('userData');
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration:number){
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleError(errorRes: HttpErrorResponse){
    let errorMessage = 'An unknown error occurred!';
    if(!errorRes.error || !errorRes.error.error){
      return throwError(errorRes);
    }

    switch(errorRes.error.error.message){
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email exists already.';
        break;

      case 'INVALID_PASSWORD':
        errorMessage = 'This email does not exist.';
        break;

      case 'USER_DISABLED':
        errorMessage = 'This password is not correct.';
        break;

    }
    return throwError(errorMessage);
  }




}
