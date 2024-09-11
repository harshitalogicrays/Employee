import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from './appconfig';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalinjectordemoService {
  component='root'
  // constructor(@Inject(APP_CONFIG)private config:AppConfig) {
  //   console.log(config)
  //  }
  constructor(){}
  log(msg:string){
    console.log(`Compnent: ${this.component} and experimental message:${msg} `)
  }
}
