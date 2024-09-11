import { Component, OnInit } from '@angular/core';
import { AsyncSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  // obs$=new Observable(observer=>{
  //   observer.next(1)
  //   observer.next(2)
  //   observer.next(3)
  //   observer.next(4)
  //   observer.complete()
  // })

  ngOnInit(): void {
    // let obssub1={
    //   next:(res:any)=>console.log(res),
    //   error:(error:any)=>console.log(error),
    //   complete:()=>console.log("complete")
    // }

    // let obssub2={
    //   next:(res:any)=>console.log(res),
    //   error:(error:any)=>console.log(error),
    //   complete:()=>console.log("complete")
    // }
  
    // this.obs$.subscribe(obssub1)
    // this.obs$.subscribe(obssub2)

    //   let subject$=new Subject()
    //   let sub1={
    //     next:(res:any)=>console.log(res),
    //     error:(error:any)=>console.log(error),
    //     complete:()=>console.log("complete")
    //   }
    //   let sub2={
    //     next:(res:any)=>console.log(res),
    //     error:(error:any)=>console.log(error),
    //     complete:()=>console.log("complete")
    //   }
      
    //   subject$.subscribe(sub1)
      
    //   subject$.subscribe(sub2)
    //    this.obs$.subscribe(subject$) 
  
      // let replaysubject$=new ReplaySubject(2,2000)
      // replaysubject$.next(1)
      // replaysubject$.subscribe({
      //   next:(data)=>console.log("observer1 "+data)
      // })
      // replaysubject$.next(2)
      // replaysubject$.next(3)
      // replaysubject$.next(4)
      // setTimeout(()=>{
      //   replaysubject$.next(5)
      //   replaysubject$.subscribe({ 
      //     next:(data)=>console.log("observer2 "+data)
      //   })
      // },3000)
      

      // let asynsubject$=new AsyncSubject()
      // asynsubject$.next(1)
      // asynsubject$.subscribe({
      //   next:(data)=>console.log("observer1 "+data)
      // })
      // asynsubject$.next(2)
      // asynsubject$.next(3)
      // asynsubject$.complete()
      // asynsubject$.next(4)
      // setTimeout(()=>{
      //   asynsubject$.next(5)
      //   asynsubject$.subscribe({ 
      //     next:(data)=>console.log("observer2 "+data)
      //   })
      // },3000)


    let sub$=new Subject<void>()
    // sub$.next(1)
    // sub$.next("fdfd")
    sub$.next()



  }

}
