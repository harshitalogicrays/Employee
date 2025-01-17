import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }
  getProducts(){
    return this._http.get("http://localhost:4000/api/saleproducts")
  }
  getnewArrivals(){
    return this._http.get("http://localhost:4000/api/newarrivals")
    
  }

}
