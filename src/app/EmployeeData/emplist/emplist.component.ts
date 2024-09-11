import { Component, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpserviceService } from '../../shared/empservice.service';
import { IEmployee } from '../../shared/i-employee';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
  // providers:[EmpserviceService]
})
export class EmplistComponent implements OnInit {
    searchvalue:string=''
    errorMsg:string;
    errordis:boolean=false
  public Employee:IEmployee[]
  fempflag:boolean=true
  public myStyle={}
  public isBold:boolean=true
  emp1:Observable<IEmployee[]>
   constructor(private _emp:EmpserviceService,
    private _router:Router,private _route:ActivatedRoute) { }
  ngOnInit(): void {
    // this.emp1=this._emp.getEmployees()
    // this.Employee=this._emp.getEmployee()
      this._emp.getEmployees().subscribe({
        next:(res)=>{
          this.Employee=res
        },
        error:(error)=>{
            this.errordis=true
            this.errorMsg=error
        }
      })
   
    // this.Employee=this.FEmployees;
   
    this.myStyle={'backgroundColor':'pink','color':'brown',
  'fontWeight':this.isBold?'bold':'normal'}
  }
applyclass:string='color1 success'
  applysuccess:boolean=true
  DisplayEmp(data:string){
    if(data==='F')
     {
      //this.Employee=this.FEmployees;
      this.fempflag=!this.fempflag
      this.myStyle={
        'backgroundColor':'pink','color':'brown'
      }
    }
      else
      {
      this.Employee=this.PEmployees
      this.fempflag=!this.fempflag
      this.myStyle={
        'backgroundColor':'brown','color':'pink'
      }
    }
}
fname:string=''
addEmp(){
  this.Employee.push({id:7,fname:this.fname,lname:"yell",gender:"male",
  salary:20000,hiredate:"12-4-2005",hra:1000,da:3000}
  )
}
  // FEmployees:any[]=[
  //   {id:1,fname:"Peter",lname:"Bishop",gender:"mAle",salary:20000,hiredate:"11-10-2020",hra:1000,da:3000},
  //   {id:2,fname:"Reya",lname:"John",gender:"Female",salary:10000,hiredate:"1-1-2000",hra:1000,da:3000},
  //   {id:3,fname:"Walter",lname:"Bishop",gender:"male",salary:40000,hiredate:"12-1-2002",hra:1000,da:3000},
  //   {id:4,fname:"Olive",lname:"Kat",gender:"female",salary:24000,hiredate:"11-11-2020",hra:1000,da:3000},
  //   {id:5,fname:"Ivan",lname:"Bayross",gender:"male",salary:20000,hiredate:"12-4-2005",hra:1000,da:3000},
  //   {id:6,fname:"Iva",lname:"Bay",gender:"female",salary:20000,hiredate:"12-4-2005",hra:1000,da:3000}
  // ]

  PEmployees:any[]=[
    {id:101,fname:"Peter",lname:"Bishop",gender:"male",hour:100,rate:2000},
    {id:102,fname:"Reya",lname:"John",gender:"female",hour:80,rate:1000},
    {id:103,fname:"Walter",lname:"Bishop",gender:"male",hour:120,rate:1500},
    {id:104,fname:"Olive",lname:"Kat",gender:"female",hour:100,rate:1000},
    {id:105,fname:"Ivan",lname:"Bayross",gender:"male",hour:70,rate:2500}
  ]

  getTotalEmp(){
    return this.Employee.length
  }
getTotalFemaleEmp(){
  return this.Employee.filter(e=>e.gender.toLowerCase()=='female').length
}
getTotalMaleEmp(){
  return this.Employee.filter(e=>e.gender.toLowerCase()=='male').length
}

// selectedRadioBtn:string='all'
// onRadioButtonChange(selectbtn:any){
//     this.selectedRadioBtn=selectbtn
// }

onSelect(id:number){
  // this._router.navigate(['/emplist',id]) // absolute path
     this._router.navigate([id],{relativeTo:this._route}) //relative path
}

deleteEmp(id:any){
  this._emp.deleteEmployee(id).subscribe({
    complete:()=>{
      this._router.navigate(['emplist'])
    }
  })
 
}
editEmp(id:any){
  this._router.navigate(['/editemp',id])   
}
}
