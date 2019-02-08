import { Component, OnInit } from '@angular/core';

// services
import { FooterService } from '../../../services/footer/footer.service';

@Component({
  selector: 'app-footer-four',
  templateUrl: './footer-four.component.html',
  styles: []
})
export class FooterFourComponent implements OnInit {

  constructor( public _fs:FooterService ) { }

  ngOnInit() {
  }

}
