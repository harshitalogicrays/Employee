import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concat, count, from, fromEvent, interval, map, max, merge, Observable, of, pluck, take, timer, toArray } from 'rxjs';
import { ObservableserviceService } from 'src/app/shared/observableservice.service';

@Component({
  selector: 'app-rxjsoperators',
  templateUrl: './rxjsoperators.component.html',
  styleUrls: ['./rxjsoperators.component.css']
})
export class RxjsoperatorsComponent implements OnInit {
  constructor(private _obsdemo:ObservableserviceService) { }
  //of operator 
    // emp=of('Ram','Shekhar','priya')
      // emp=of({fname:"Ram",lname:"Sharma",age:30})
      // obsmsg:any;
    // emp1$=from(['Peter','smith','olive','jhon','Walter'])
    // @ViewChild('btn')btn:ElementRef
    arraydata:any[]
     members=[{id:101,name:'peter',skills:'angular',contact:{phno:12345,email:'peter@gmail.com'}},
    {id:103,name:'smith',skills:'vue',contact:{phno:12225,email:'peter@gmail.com'}},
    {id:104,name:'peter',skills:'react',contact:{phno:22345,email:'peter@gmail.com'}},
    {id:105,name:'ivan',skills:'python',contact:{phno:34345,email:'peter@gmail.com'}},
    {id:106,name:'robin',skills:'c#',contact:{phno:76433,email:'peter@gmail.com'}}]


  source1$=of('a','b','c')
  source2$=new Observable(ob=>{
    setInterval(()=>{ob.next("hello")
  },1000)
  })
  source3$=interval(2000)
  ngOnInit(): void {
    // this.emp.pipe(map((data:any)=>'string value ='+data)).subscribe({
    //   next:(data)=>{      
    //       this._obsdemo.print(data,'con')
    //   }
    // })

    // this.emp.subscribe({
    //   next:(data)=>{      
    //     console.log(data)
    //     this.obsmsg=data
    //   }
    // })

    // this.emp1$.subscribe({
    //   next:(data)=> this._obsdemo.print(data,'con')
    // })

    // const toArraydemo$=interval(1000)
    
    //   toArraydemo$.pipe(take(5),toArray()).subscribe({
    //     next:(res)=> {
    //       console.log(res)
    //       this.arraydata=res
    //     }
    //       })


    // const toArraydemo$=of({a:'aff',b:'bgg',c:'cgfgf',d:'dfdgd',e:'efdfdf',f:'fdfgfgf'})
    
    // toArraydemo$.pipe(toArray()).subscribe({
    //   next:(res)=> {
    //     console.log(res)
    //     this.arraydata=res
    //   }
    //     })

    concat(this.source1$,this.source2$).subscribe({
      next:(res)=>{
        console.log(res)
        this._obsdemo.print(res,'con')
      }
    })

    merge(this.source3$,this.source1$,this.source2$).subscribe({
      next:(res)=>{
        console.log(res)
        this._obsdemo.print(res,'con1')
      }
    })
  }

  // ngAfterViewInit(){
  //   const buttonevent$=fromEvent(this.btn.nativeElement,'click')
  //   let count=0;
  //   buttonevent$.subscribe({
  //     next:(res)=>{
  //           count++;
  //           // console.log(count++)
  //           this._obsdemo.print(count,'con')
  //     }
  //   })
  //}

  fetchdata(){
      // from(this.members).pipe(
      //   // map(data=>data.skills)
      //   pluck('skills'),toArray()
      //   ).subscribe({
      //   next:(res)=>{console.log(res)
      //     this.arraydata=res
      //   }
      // })


      // from(this.members).pipe(
      //   pluck('contact','email'),toArray()
      //   ).subscribe({
      //   next:(res)=>{console.log(res)
      //     this.arraydata=res
      //   }
      // })


      // from(this.members).pipe(
      //     pluck('contact','phno'),
      //     max()
      //     ).subscribe({
      //     next:(res)=>{console.log(res)
      //     }
      //   })


      // from(this.members).pipe(
      //   pluck('contact','phno'),
      //   count((val)=>val>18225)
      //   ).subscribe({
      //   next:(res)=>{console.log(res)
      //   }
      // })
  }
}
