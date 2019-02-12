import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// shared elements
import { SharedFormComponent } from '../sharedElements/shared-form/shared-form.component';

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

// val prop
import { ValPropOneComponent } from './valProp/val-prop-one/val-prop-one.component';
import { ValPropTwoComponent } from './valProp/val-prop-two/val-prop-two.component';
import { ValPropThreeComponent } from './valProp/val-prop-three/val-prop-three.component';
import { ValPropFourComponent } from './valProp/val-prop-four/val-prop-four.component';

// contact
import { ContactOneComponent } from './contact/contact-one/contact-one.component';
import { ContactTwoComponent } from './contact/contact-two/contact-two.component';
import { ContactThreeComponent } from './contact/contact-three/contact-three.component';
import { ContactFourComponent } from './contact/contact-four/contact-four.component';


@NgModule({
     imports: [
          BrowserModule,
     ],
     declarations: [
          SharedFormComponent,

          NavbarOneComponent,
          NavbarTwoComponent,
          NavbarThreeComponent,
          NavbarFourComponent,

          FooterOneComponent,
          FooterTwoComponent,
          FooterThreeComponent,
          FooterFourComponent,

          ValPropOneComponent,
          ValPropTwoComponent,
          ValPropThreeComponent,
          ValPropFourComponent,

          ContactOneComponent,
          ContactTwoComponent,
          ContactThreeComponent,
          ContactFourComponent,
     ],
     exports: [
          SharedFormComponent,

          NavbarOneComponent,
          NavbarTwoComponent,
          NavbarThreeComponent,
          NavbarFourComponent,
     
          FooterOneComponent,
          FooterTwoComponent,
          FooterThreeComponent,
          FooterFourComponent,

          ValPropOneComponent,
          ValPropTwoComponent,
          ValPropThreeComponent,
          ValPropFourComponent,

          ContactOneComponent,
          ContactTwoComponent,
          ContactThreeComponent,
          ContactFourComponent,
     ],
     providers: [],
})
export class SharedCompModule { }
