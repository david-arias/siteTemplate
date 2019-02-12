import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../services/contact/contact.service';

@Component({
  selector: 'app-contact-two',
  templateUrl: './contact-two.component.html',
  styles: []
})
export class ContactTwoComponent implements OnInit {

  constructor( public _cos:ContactService ) { }

  ngOnInit() {
  }

}
