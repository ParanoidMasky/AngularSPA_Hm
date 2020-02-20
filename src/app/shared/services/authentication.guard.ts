import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationGuard implements CanActivate {

  constructor (
    private _tokenService : TokenService,
    private _router : Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if(this._tokenService.getActiveToken() == "QpwL5tke4Pnpja7X4"){
        return true;
      }else{
        console.log("Stop you violated the law")
        this._router.navigateByUrl('home')
        return false;
      }
  }
  
}
