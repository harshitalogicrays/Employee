import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-widget',
  templateUrl: './product-widget.component.html',
  styleUrls: ['./product-widget.component.css'],
  // encapsulation:ViewEncapsulation.ShadowDom
})
export class ProductWidgetComponent implements OnInit {
@Input() products:any[]=[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.products)
  }

}
