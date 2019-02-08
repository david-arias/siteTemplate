import { Injectable } from '@angular/core';
import { BRAND, MENU } from '../../dataTemplate/dataTemp';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  brand:any;
  menu:any;

  legal:string;
  date:number;

  constructor() {
    this.brand = BRAND;
    this.menu = MENU;

    this.date = new Date().getFullYear();

    this.legal = `&copy;${ this.date } - Koi Fish | All rights reserved`;
  }
}
