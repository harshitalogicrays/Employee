import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  data:string="employee Details"
  id:number=101;
  fname:string="Peter"
  lname:string="Bishop"
  gender:string="male"
  salary:number=30000
  imgurl:string="c2.jpg";
  isDisabled:boolean=true
  cols:number=2
  toggleBtn:boolean=true
  choose:string
  applyclass='color'
  fun(){
    alert("button clicked")
  }
  showhide(){
    this.toggleBtn=!this.toggleBtn
  }
  showdata:boolean=false
  public names:string[]=["Harshita","Neelam","Seema","Rekha"]
  setName(eve:any){
        // console.log(eve.target.value)
      this.choose=eve.target.value
  }
  constructor() { }

  ngOnInit(): void {
  }

}
