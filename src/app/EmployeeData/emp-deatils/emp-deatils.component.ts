import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-emp-deatils',
  templateUrl: './emp-deatils.component.html',
  styleUrls: ['./emp-deatils.component.css']
})
export class EmpDeatilsComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _router:Router) { }
  empid:any;
  ngOnInit(): void {
  //  this.empid= this._route.snapshot.paramMap.get('id')
  this._route.paramMap.subscribe((params:ParamMap)=>{
    this.empid=params.get('id') 
  })
  }
  gotoEmpList(){
    // let sid=this.empid?this.empid:null
    this._router.navigate(['/emplist'])
    
  }
}
