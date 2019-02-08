import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// services
import { NavbarService } from './navbar/navbar.service';
import { FooterService } from './footer/footer.service';

import { ValPropService } from './valProp/val-prop.service';


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

          ValPropService
     ],
})
export class ServicesModule { }
