import { Component, OnInit } from '@angular/core';
import { ValPropService } from '../../../services/valProp/val-prop.service';

@Component({
  selector: 'app-val-prop-two',
  templateUrl: './val-prop-two.component.html',
  styles: []
})
export class ValPropTwoComponent implements OnInit {

  constructor( public _vps:ValPropService ) { }

  ngOnInit() {
  }

}
