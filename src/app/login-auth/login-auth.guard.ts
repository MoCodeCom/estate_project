import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, map, tap } from "rxjs";
import { authService } from "../home/home/services/auth.service";

@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate{
  constructor(
    private authService: authService,
    private router:Router
    ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      let isExist = localStorage.getItem('userData');
      if(isExist){
        return true;
      }else{
        return this.router.createUrlTree(['/loginAuth']);
      }
  }
}
