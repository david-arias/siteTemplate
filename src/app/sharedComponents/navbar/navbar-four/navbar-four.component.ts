import { Component, OnInit } from '@angular/core';

// services
import { NavbarService } from '../../../services/navbar/navbar.service';

@Component({
  selector: 'app-navbar-four',
  templateUrl: './navbar-four.component.html',
  styles: []
})
export class NavbarFourComponent implements OnInit {

  constructor( public _nbs:NavbarService ) { }

  ngOnInit() {
  }

}
