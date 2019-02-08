import { Injectable } from '@angular/core';
import { BRAND, MENU } from '../../dataTemplate/dataTemp';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  brand:any;
  menu:any;

  constructor() {
    this.brand = BRAND;
    this.menu = MENU;
  }
}
