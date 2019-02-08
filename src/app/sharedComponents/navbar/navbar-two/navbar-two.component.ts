import { Component, OnInit } from '@angular/core';

// services
import { NavbarService } from '../../../services/navbar/navbar.service';

@Component({
  selector: 'app-navbar-two',
  templateUrl: './navbar-two.component.html',
  styles: []
})
export class NavbarTwoComponent implements OnInit {

  constructor( public _nbs:NavbarService ) { }

  ngOnInit() {
  }

}
