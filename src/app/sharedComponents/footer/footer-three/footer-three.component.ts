import { Component, OnInit } from '@angular/core';

// services
import { FooterService } from '../../../services/footer/footer.service';

@Component({
  selector: 'app-footer-three',
  templateUrl: './footer-three.component.html',
  styles: []
})
export class FooterThreeComponent implements OnInit {

  constructor( public _fs:FooterService ) { }

  ngOnInit() {
  }

}
