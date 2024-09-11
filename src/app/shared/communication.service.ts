import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  // public feedback=new Subject<string>()
  public feedback=new BehaviorSubject<string>('Hey')
  constructor() { }

  sendFeedback(msg:string){
    this.feedback.next(msg)
  }
}
