import { Component, OnInit } from '@angular/core';

// services
import { ValPropService } from '../../../services/valProp/val-prop.service';

@Component({
  selector: 'app-val-prop-one',
  templateUrl: './val-prop-one.component.html',
  styles: []
})
export class ValPropOneComponent implements OnInit {

  constructor( public _vps:ValPropService ) { }

  ngOnInit() {
  }

}
