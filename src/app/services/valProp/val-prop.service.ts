import { Injectable } from '@angular/core';

import { VALPROP, BRAND } from '../../dataTemplate/dataTemp';

@Injectable({
  providedIn: 'root'
})
export class ValPropService {

  valPropBrand: any;
  valPropInfo:any;

  constructor() {
    this.valPropInfo = VALPROP;    
    this.valPropBrand = BRAND;    
  }
}
