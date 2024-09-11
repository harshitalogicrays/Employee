import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/shared/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {email:'',password:''}

  constructor(private _auth:AuthserviceService,private _router:Router) { }

  ngOnInit() {
  }
  loginUser () {
  //  console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData).subscribe({
      next:(res)=>{
        console.log(res)
        localStorage.setItem('token',res.token)
        this._router.navigate(['/newarrivals'])},
      error:(error)=>console.log(error)
    })
  }


}
