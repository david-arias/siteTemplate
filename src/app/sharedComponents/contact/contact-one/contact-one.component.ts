import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact/contact.service';

@Component({
  selector: 'app-contact-one',
  templateUrl: './contact-one.component.html',
  styles: []
})
export class ContactOneComponent implements OnInit {

  constructor( public _cos:ContactService ) { }

  ngOnInit() {
  }

}
