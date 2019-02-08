import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// services
import { NavbarService } from './navbar/navbar.service';
import { FooterService } from './footer/footer.service';


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
          FooterService
     ],
})
export class ServicesModule { }
