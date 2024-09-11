import { Component, Host, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { AppConfig, APP_CONFIG } from 'src/app/shared/appconfig';
import { ExperimentalinjectordemoService } from 'src/app/shared/experimentalinjectordemo.service';
import { injectobject } from 'src/app/shared/injectObject';
import { InjectordemoService } from 'src/app/shared/injectordemo.service';

@Component({
  selector: 'app-servicedemo',
  templateUrl: './servicedemo.component.html',
  styleUrls: ['./servicedemo.component.css'],
  providers:
  [
    // {  provide:InjectordemoService,useClass:ExperimentalinjectordemoService}
    // {  provide:InjectordemoService,useExisting:ExperimentalinjectordemoService}
    // {  provide:InjectordemoService,useValue:injectobject}
  //   {provide:InjectordemoService,
  //     useFactory:(config:AppConfig)=>{
  //     return config.experimenatilService? 
  //     new ExperimentalinjectordemoService():
  //     new InjectordemoService()
  //   },
  //   deps:[APP_CONFIG]
  // }

    {provide:InjectordemoService,useClass:InjectordemoService,multi:true},
    {provide:InjectordemoService,useValue:injectobject,multi:true}
]
})
export class ServicedemoComponent implements OnInit {

  // constructor(@Optional() private injects:InjectordemoService) { }
  // constructor(@Self() private injects:InjectordemoService,
  // @SkipSelf() private inject1:InjectordemoService) { }
  // constructor(@Host() private inject2:InjectordemoService){}
  constructor(private inject2:InjectordemoService,private exp:ExperimentalinjectordemoService){}
  ngOnInit(): void {  
  //   if(this.injects){
  //     this.injects.component="Service Demo Component"
  //     this.injects.log("service demo function")
  //   }
  //   if(this.inject1)
  //     this.inject1.log("skipself modifier")

    console.log(this.inject2)
    // this.inject2.log("host demo")
    // console.log("same instance",this.inject2===this.exp)

 }
  
}
