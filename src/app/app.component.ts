import { Component } from '@angular/core';

@Component({
  // selector: '[app-root]',
  // selector: '.app-root',
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template:`
            <p>Angular Project template demo</p>
            <h1>Hello {{title}}</h1>
            <h2>{{2+3}}</h2>
            `,*/
  styleUrls: ['./app.component.css']
  // styles:['p{color:red;} h1{color:blue;border:2px solid red}']
})
export class AppComponent {
  title = 'Employee';
  public emp={id:101,fname:"Peter",lname:"Bishop",gender:"male",hour:100,rate:2000}
  toggle:boolean=true

}