import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommunicationService } from 'src/app/shared/communication.service';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
// var marker=document.getElementByID('highlight')
      // @ViewChild('highlight')marker:ElementRef
      @ViewChild('remark')txtbox:ElementRef
      @ViewChildren('highlight')marker:QueryList<any>

  notice:string=''
  constructor(private _comm:CommunicationService) { }

  ngOnInit(): void {
    this._comm.feedback.subscribe({
      next:(data)=>this.notice=data
    })
  }
  ngAfterViewInit(){
    console.log(this.marker)
    // this.marker.nativeElement.style.color="red"
    this.marker.first.nativeElement.style.color="yellow"
    this.marker.last.nativeElement.style.color="blue"

      this.txtbox.nativeElement.focus()
      this.txtbox.nativeElement.style.background="red"
  }

  submitremark(remark:any){
    // alert(remark.value)
    this._comm.sendFeedback(remark.value)
  }

  @ViewChild('counter')count:CounterComponent
  inc(){this.count.increment()}
  dec(){this.count.decrement()}


}
