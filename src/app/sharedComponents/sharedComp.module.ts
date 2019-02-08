import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// navbars
import { NavbarOneComponent } from './navbar/navbar-one/navbar-one.component';
import { NavbarTwoComponent } from './navbar/navbar-two/navbar-two.component';
import { NavbarThreeComponent } from './navbar/navbar-three/navbar-three.component';
import { NavbarFourComponent } from './navbar/navbar-four/navbar-four.component';

// footers
import { FooterOneComponent } from './footer/footer-one/footer-one.component';
import { FooterTwoComponent } from './footer/footer-two/footer-two.component';
import { FooterThreeComponent } from './footer/footer-three/footer-three.component';
import { FooterFourComponent } from './footer/footer-four/footer-four.component';


@NgModule({
     imports: [
          BrowserModule,
     ],
     declarations: [
          NavbarOneComponent,
          NavbarTwoComponent,
          NavbarThreeComponent,
          NavbarFourComponent,

          FooterOneComponent,
          FooterTwoComponent,
          FooterThreeComponent,
          FooterFourComponent
     ],
     exports: [
          NavbarOneComponent,
          NavbarTwoComponent,
          NavbarThreeComponent,
          NavbarFourComponent,
     
          FooterOneComponent,
          FooterTwoComponent,
          FooterThreeComponent,
          FooterFourComponent
     ],
     providers: [],
})
export class SharedCompModule { }
