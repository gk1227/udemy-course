import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {serverComponent} from './server/server.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    serverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
