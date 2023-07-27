import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { AuthResponseData } from "../modules/AuthResponseData";
import { Observable, Subject, catchError, tap, throwError } from "rxjs";
import { User } from "../models/User";
import { Router } from "@angular/router";
import { FirebaseApp } from "@angular/fire/compat";
import { getAuth } from "firebase/auth";
import { AngularFireAuth } from "@angular/fire/compat/auth";





@Injectable({ providedIn:'root'})
export class authService implements OnInit{

  constructor(private http:HttpClient,
              private router:Router,
              private fb:FirebaseApp,
              private authfb:AngularFireAuth
              ){
                this.getauth();
              }
  ngOnInit(): void {

  }

  user = new Subject<User>();
  tokenExpirationTimer:any;
  isLoggedIn:Observable<boolean>;
  isLoggedout:Observable<boolean>;



  /* function signUp */
  /* signp with api*/
  signup(email:string, password:string, displayname?:string){
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

  /**signup with angular firebase */
  signupAuth(email:string, passwrod:string){
    return this.authfb.createUserWithEmailAndPassword(email, passwrod);
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

  signinAuth(email:string, password:string){
    return this.authfb.signInWithEmailAndPassword(email, password)
    .then((res)=>{
      //console.log(res.user);
      this.router.navigate(['/home']);
    })
  }

  handleAuth(email:string, id:string, token:string, expire:string){
    const expirationDate = new Date(new Date().getTime() + parseInt(expire) * 1000);
    const user = new User(email, id, token, expirationDate);
    this.user.next(user);
    this.autoLogout(parseInt(expire) * 1000);
    localStorage.setItem("userData",JSON.stringify(token));
    //this.reload();
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
    localStorage.removeItem('position');

    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  logoutAuth(){

    this.authfb.signOut()
    .then(() =>{
      //console.log('logout from account :');
    });
    this.router.navigate(['/loginAuth']);
    localStorage.removeItem('userData');
    localStorage.removeItem('position');
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration:number){
    this.tokenExpirationTimer = setTimeout(() => {
      /** signout API */
      //this.logout();
      /** signout auth */
      this.authfb.signOut();
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

  getauth(){
    const user = getAuth().onAuthStateChanged(res =>{
      //console.log(res);
    });
    //getAuth().setCustomUserClaims                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            ()
    return user;
  }

  deleteAuth(data:any){
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyAOsw9i6F61js3aCbwPj5rsEFnApjQnlEQ",
    {
      idToken:data
    });
  }



}
