import { Component, OnInit } from '@angular/core';

// services
import { FooterService } from '../../../services/footer/footer.service';

@Component({
  selector: 'app-footer-two',
  templateUrl: './footer-two.component.html',
  styles: []
})
export class FooterTwoComponent implements OnInit {

  constructor( public _fs:FooterService) { }

  ngOnInit() {
  }

}
