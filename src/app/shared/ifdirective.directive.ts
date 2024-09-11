import { Directive,Input, OnChanges, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfdirective]'
})
export class IfdirectiveDirective {
@Input() appIfdirective:boolean
  constructor(private tempRef:TemplateRef<any>,
    private vcRef:ViewContainerRef) { }

    ngOnChanges(){
      // console.log(this.appIfdirective)
        if(this.appIfdirective)
            this.vcRef.createEmbeddedView(this.tempRef)
          else
            this.vcRef.clear()
    }

    // @Input() set appIfdirective(condition:boolean){
    //    if(condition)
    //         this.vcRef.createEmbeddedView(this.tempRef)
    //       else
    //         this.vcRef.clear()
    // }

}
