import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-newarrivals',
  templateUrl: './newarrivals.component.html',
  styleUrls: ['./newarrivals.component.css']
})
export class NewarrivalsComponent implements OnInit {
products:any[]
  constructor(private _products:ProductsService,private _router:Router) { }

  ngOnInit(): void {
    this._products.getnewArrivals().subscribe({
      next:(data:any)=>this.products=data,
      error:(error)=>{
        if(error instanceof HttpErrorResponse)
          if(error.status==401)
            this._router.navigate(['/login'])
      }
    })
  }

}
