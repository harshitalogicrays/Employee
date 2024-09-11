import { Injectable } from '@angular/core';
import {interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableserviceService {

  constructor() {
   
   }
   print(val:any,contianerid:string){
    let li=document.createElement('li')
    li.innerHTML= val
    document.getElementById(contianerid)?.appendChild(li)
  }

  hello=new Observable<string>(observer=>{
    observer.next("hello from observable")
  })
}
  
