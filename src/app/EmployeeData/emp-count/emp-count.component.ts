import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { EmpserviceService } from 'src/app/shared/empservice.service';

@Component({
  selector: 'app-emp-count',
  templateUrl: './emp-count.component.html',
  styleUrls: ['./emp-count.component.css']
})
export class EmpCountComponent implements OnInit {
 @Input() all:number=0
  @Input() female:number=0
  @Input() male:number=0

  // holds the selected radiobtn value
  selectedRadioBtnValue='all'
  
  // @Output()
  // countRadioBtnSelectionChanged=new EventEmitter<string>()

  // Radiobtnvaluechange(){
  //   this.countRadioBtnSelectionChanged.emit(this.selectedRadioBtnValue)
  //   // console.log(this.selectedRadioBtnValue)
  // }
  
  
  constructor(private _emp:EmpserviceService) { }

  ngOnInit(): void {
  }

  openalert(){
    // alert("Newletter button clicked")
    this._emp.clickbtn()
  }
}
