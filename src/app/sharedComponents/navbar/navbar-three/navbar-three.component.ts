import { Component, OnInit } from '@angular/core';

// services
import { NavbarService } from '../../../services/navbar/navbar.service';

@Component({
  selector: 'app-navbar-three',
  templateUrl: './navbar-three.component.html',
  styles: []
})
export class NavbarThreeComponent implements OnInit {

  constructor( public _nbs:NavbarService ) { }

  ngOnInit() {
  }

}
