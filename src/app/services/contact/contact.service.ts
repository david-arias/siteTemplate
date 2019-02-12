import { Injectable } from '@angular/core';

import { BRAND, CONTACT } from '../../dataTemplate/dataTemp';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  brand:any;
  contact:any;

  mapToken:string = "pk.eyJ1IjoiZGF2aWQtYXJpYXMiLCJhIjoiY2puMG5keHdlMjE3dzN2bm9vNmsxd2lxbSJ9.nZIc3tZTw7K_dieILNYt6Q";

  constructor() {
    this.brand = BRAND;
    this.contact = CONTACT;

    // console.log( this.brand );
    // console.log( this.contact );
    
  }
}
