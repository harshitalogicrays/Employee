import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentlifecycle',
  templateUrl: './parentlifecycle.component.html',
  styleUrls: ['./parentlifecycle.component.css']
})
export class ParentlifecycleComponent implements OnInit {
  value:string="Pune"
  changeVal(v:any){
    this.value=v.value
  }
  togglebtn:boolean=true
  Destroy(){
    this.togglebtn=false
  }
  constructor() { }

  ngOnInit(): void {
  }

}
