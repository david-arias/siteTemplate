import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// services
import { NavbarService } from './navbar/navbar.service';
import { FooterService } from './footer/footer.service';

import { ValPropService } from './valProp/val-prop.service';
import { ContactService } from './contact/contact.service';


@NgModule({
     imports: [
          CommonModule
     ],
     declarations: [
     ],
     exports: [
     ],
     providers: [
          NavbarService,
          FooterService,

          ValPropService,
          ContactService,
     ],
})
export class ServicesModule { }
