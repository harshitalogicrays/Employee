import { Component, OnInit } from '@angular/core';
import { filter, Observable,map, Subscription, interval } from 'rxjs';
import { ObservableserviceService } from 'src/app/shared/observableservice.service';

@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css']
})
export class ObservabledemoComponent implements OnInit {
  sub:Subscription
  int:Subscription
  printhello:string
  constructor(private _obsdemo:ObservableserviceService) { }

  ngOnInit(): void {
//promise
  /*  const pro1=new Promise((resolve,reject)=>{
      console.log('promise call')
      setTimeout(()=>{  
      resolve('promise working')
      resolve('promise working1')
      resolve('promise working2')
      resolve('promise working3')
    
    },1000)
    })
    pro1.then((res)=>console.log(res))

*/
    //observable
 /* const obs=new Observable((observer)=>{
    console.log('Observable call')
    setTimeout(()=>{
      observer.next('observable working')
      observer.next('observable working1')
      observer.next('observable working2')
      observer.next('observable working3')
      //next
      //error
      //complete
    },1000)
  })

obs.subscribe({
  next:(data)=>{console.log(data)}
 })
*/

//  const obs1=new Observable(ob=>{
//    let count=0
//     setInterval(()=>{
//       count=count+1;
//       ob.next(count)
//       // if(count>5)
//       // ob.error("should be less then 5")
//       // if(count==6)
//       //   ob.complete();
//     },1000)
//  })

// this.sub = obs1.pipe(filter((n:any)=> n%2==0 ), map((n:any)=>2*n))
//  .subscribe({
//    next:(d)=>console.log(d),
//    error:(err)=>console.log(err),
//    complete:()=>console.log("complete")
//  })


//  this.int= interval(1000).pipe(map((i:any)=>i+1)).subscribe({
//     next:(i)=>{
//       console.log(i)
//       this._obsdemo.print(i,'container')
//        }
//   })

  this._obsdemo.hello.subscribe({
    next:(res)=> this.printhello=res
  })

   }

 ngOnDestroy(){
  //  this.sub.unsubscribe()
  //  this.int.unsubscribe()
 }
  
}
