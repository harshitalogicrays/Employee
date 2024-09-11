import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InjectordemoService {
  component='root'
  constructor() { }
  log(msg:string){
    console.log(`Compnent: ${this.component} and message:${msg} `)
  }
}
