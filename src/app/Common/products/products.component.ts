import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  // encapsulation:ViewEncapsulation.None
})
export class ProductsComponent implements OnInit {
  public salesproducts:any[]=[]
  isAvail=true
  constructor(private _products:ProductsService) { }

  ngOnInit(): void {
    this._products.getProducts().subscribe({
      next:(data:any)=>{
        this.salesproducts=data
        // console.log(this.salesproducts)
      }
    })
  }

}
