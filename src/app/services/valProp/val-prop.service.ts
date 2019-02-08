import { Injectable } from '@angular/core';

import { VALPROP } from '../../dataTemplate/dataTemp';

@Injectable({
  providedIn: 'root'
})
export class ValPropService {

  valPropInfo:any;

  constructor() {
    this.valPropInfo = VALPROP;    
  }
}
