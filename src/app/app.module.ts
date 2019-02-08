import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// modules
import { SharedCompModule } from './sharedComponents/sharedComp.module';
import { ServicesModule } from './services/services.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    SharedCompModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
