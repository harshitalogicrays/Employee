import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IEmployee } from './i-employee';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(private _http:HttpClient) { }

  clickbtn(){
    alert("Form Service - newletter button clicked")
  }
// _url="http://localhost:3000/Employees/"
_url="http://localhost:4000/api/customers/"

  // getEmployee():IEmployee[]{
  //   return [
  //     {id:1,fname:"Peter",lname:"Bishop",gender:"mAle",salary:20000,hiredate:"11-10-2020",hra:1000,da:3000},
  //     {id:2,fname:"Reya",lname:"John",gender:"Female",salary:10000,hiredate:"1-1-2000",hra:1000,da:3000},
  //     {id:3,fname:"Walter",lname:"Bishop",gender:"male",salary:40000,hiredate:"12-1-2002",hra:1000,da:3000},
  //     {id:4,fname:"Olive",lname:"Kat",gender:"female",salary:24000,hiredate:"11-11-2020",hra:1000,da:3000},
  //     {id:5,fname:"Ivan",lname:"Bayross",gender:"male",salary:20000,hiredate:"12-4-2005",hra:1000,da:3000},
  //     {id:6,fname:"Iva",lname:"Bay",gender:"female",salary:20000,hiredate:"12-4-2005",hra:1000,da:3000}
  //   ]
  // }

  // getEmployees():Observable<IEmployee[]>{
  //   let httphead=new HttpHeaders({
  //     'content-type':'application/json',
  //     'custom-header':'Harshita',
  //     'Authorization':'harshita1111111111',
  //     'timeheader':'3000'
  //   })
    // let serachparams=new HttpParams()
    // serachparams=serachparams.append('id','2')
    // serachparams=serachparams.append('fname','Peter')
    // return this._http.get<IEmployee[]>(this._url,{
      // headers:httphead
      // ,params:new HttpParams().set('id',2)
      // , params:serachparams
    // })
//     .pipe(
//       map((res)=>{
//         let employee:IEmployee[]=[]
//         for(let key in res)
//           employee.push(res[key])
//           return employee
//       }),
//       catchError(this.ErrorHandler)
//          )
//  }
//   ErrorHandler(error:HttpErrorResponse){
//       return throwError(()=>error.message || 'server error')
      
//   }

getEmployees():Observable<IEmployee[]>{
  return this._http.get<IEmployee[]>(this._url)
}

  postEmployees(emp:any){
    return this._http.post(this._url,emp)
  }
  postResume(data:any){
    return this._http.post("http://localhost:3000/resume",data)
  }

  deleteEmployee(id:any){
    return this._http.delete(this._url+id)
  }
  getEmployeeById(id:any){
    return this._http.get(this._url+id)

  }
  updateEmployee(emp:any){
    return this._http.put(this._url+emp.id,emp)
  }
}
