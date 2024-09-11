import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/shared/communication.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private _comm:CommunicationService) { }
notice:string=''
  ngOnInit(): void {
    this._comm.feedback.subscribe({
      next:(data)=>this.notice=data,
      error:(error)=>console.log(error)
    })
  }

}
