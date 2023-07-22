import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { AuthResponseData } from "../modules/AuthResponseData";



@Injectable({ providedIn:'root'})
export class authService implements OnInit{

  constructor(private http:HttpClient){}
  ngOnInit(): void {

  }


  /* function signUp */
  signup(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAOsw9i6F61js3aCbwPj5rsEFnApjQnlEQ',{
      email:email,
      password:password,
      returnSecureToken:true
    });
  }


  signin(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOsw9i6F61js3aCbwPj5rsEFnApjQnlEQ',{
      email:email,
      password:password,
      returnSecureToken:true
    })
  }

}
