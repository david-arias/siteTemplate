import { Component, OnInit } from '@angular/core';

// services
import { FooterService } from '../../../services/footer/footer.service';

@Component({
  selector: 'app-footer-one',
  templateUrl: './footer-one.component.html',
  styles: []
})
export class FooterOneComponent implements OnInit {

  constructor( public _fs:FooterService) { }

  ngOnInit() {
  }

}
