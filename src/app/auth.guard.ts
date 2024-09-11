import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthserviceService } from './shared/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth:AuthserviceService,private _router:Router){}
  canActivate():boolean {
    if(this._auth.loggedIn())
      return true;
    else  
      return false
  }
  
}
