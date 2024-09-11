import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/shared/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {email:'',password:''}
  constructor(private _auth:AuthserviceService,private _router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
  // console.log(this.registerUserData) // {email:'abc@gmail.com',password:'12345'}
    this._auth.registerUser(this.registerUserData).subscribe({
      next:(res)=>{
        console.log(res)
        alert(res.msg)
          this._router.navigate(['/login'])
      }
    })
  }

}
