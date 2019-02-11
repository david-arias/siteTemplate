import { Component, OnInit } from '@angular/core';
import { ValPropService } from '../../../services/valProp/val-prop.service';

@Component({
  selector: 'app-val-prop-three',
  templateUrl: './val-prop-three.component.html',
  styles: []
})
export class ValPropThreeComponent implements OnInit {

  constructor( public _vps:ValPropService ) { }

  ngOnInit() {
  }

}
