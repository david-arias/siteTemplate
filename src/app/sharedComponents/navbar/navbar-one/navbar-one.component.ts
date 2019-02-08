import { Component, OnInit } from '@angular/core';

// services
import { NavbarService } from '../../../services/navbar/navbar.service';

@Component({
  selector: 'app-navbar-one',
  templateUrl: './navbar-one.component.html',
  styles: []
})
export class NavbarOneComponent implements OnInit {

  constructor( public _nbs:NavbarService ) {
  }

  ngOnInit() {
  }

}
