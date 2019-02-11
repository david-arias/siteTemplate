import { Component, OnInit } from '@angular/core';
import { ValPropService } from '../../../services/valProp/val-prop.service';

@Component({
  selector: 'app-val-prop-four',
  templateUrl: './val-prop-four.component.html',
  styles: []
})
export class ValPropFourComponent implements OnInit {

  constructor( public _vps:ValPropService ) { }

  ngOnInit() {
  }

}
