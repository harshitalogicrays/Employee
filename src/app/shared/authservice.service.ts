import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private _registerUrl = "http://localhost:4000/api/register";
  private _loginUrl = "http://localhost:4000/api/login";

  constructor(private http: HttpClient,private _router:Router) { }

  registerUser(user:any) { // user ={email:'abc@gmail.com',password:'12345'}
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user:any) {
    return this.http.post<any>(this._loginUrl, user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
  }
}
