import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-childlifecycle',
  templateUrl: './childlifecycle.component.html',
  styleUrls: ['./childlifecycle.component.css']
})
export class ChildlifecycleComponent implements OnInit,OnChanges {
  @Input() txtvalue:string=''
  constructor() { console.log("construtor called") }
  ngOnInit(): void {
    console.log("ngOnInit called")
  }
    ngOnChanges(change:SimpleChanges){
    console.log("ngOnChanges called ",change)
}
ngDoCheck(){
  console.log("ngDoCheck called")
}
ngAfterContentInit(){
  console.log("ngAfterContentInit called")
}
ngAfterContentChecked(){
  console.log("ngAfterContentChecked called")
}
ngAfterViewInit(){
  console.log("ngAfterViewInit called")
}
ngAfterViewChecked(){
  console.log("ngAfterViewChecked called")
}
ngOnDestroy(){
  console.log("ngOnDestroy called")
}
}
