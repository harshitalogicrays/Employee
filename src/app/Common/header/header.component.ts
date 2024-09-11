import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from 'src/app/shared/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthserviceService) { }

  ngOnInit(): void {
  }

}
