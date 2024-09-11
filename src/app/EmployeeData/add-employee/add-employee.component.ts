import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeeclass } from 'src/app/shared/employeeclass';
import { EmpserviceService } from 'src/app/shared/empservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  // txtvalue:string="Happy"
  // fetchvalue(element:any){ //element means textbox with all attributes
  //   console.log(element.value) // textbox value
  //   console.log(element.type) // textbox type
  // }
  constructor(private _emp:EmpserviceService,private _route:ActivatedRoute,private _router:Router) { }
  editdata=false
  ngOnInit(): void {
    this.alert={type: 'success',msg: `Well done! `,timeout: 2000};   
    // console.log(this.empdata)
    // console.log(this.empdata.getFullname())
    let id=this._route.snapshot.paramMap.get('id')
    if(id){
      this.editdata=true
      this._emp.getEmployeeById(id).subscribe({
        next:(res:any)=>{
          // console.log(res)
          this.empdata=res
        }
      })
    }

  }

  openalert(){
    // alert("Newletter button clicked")
    // this._emp.clickbtn()
  }
designation=[{id:101,name:"Developer"},{id:102,name:"Manager"},
{id:103,name:"Admin"},{id:104,name:"SalesExecutive"}]
empdata=new Employeeclass("","","",0,"",0,0,null)
alert:any={}
show:boolean=false
addEmp(emp:NgForm){
  if(!this.editdata){
//  this.show=true
  console.log(this.empdata)
 this._emp.postEmployees(this.empdata).subscribe({
   next:(res)=>{
     console.log("Data Submitted",res)
     this._router.navigate(['emplist'])
   }
 })
}
else
{
  this._emp.updateEmployee(this.empdata).subscribe({
    next:(res)=>{
      console.log(res)
      this._router.navigate(['emplist'])
    }
  })
}
}

// haserr=false

// checkdesg(val:string){
//   if(val==null) this.haserr=true
//   else  
//     this.haserr=false
// }

}
