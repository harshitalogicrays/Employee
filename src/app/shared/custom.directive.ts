import { Directive,ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
   //constructor(private element:ElementRef) {
    // this.element.nativeElement.style.border="2px solid blue"
    // this.element.nativeElement.style.height="300px"
   //}

  @HostBinding('style.border')b:string='';
  @HostBinding('style.backgroundColor')c:string='';
  @HostListener('mouseover')onMouseOver(){this.b='2px solid blue'
  this.c='yellow'}
  @HostListener('mouseleave')onMouseLeave(){this.b=''
      this.c='pink'}

}
