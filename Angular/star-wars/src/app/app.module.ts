import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //let us make requests to the outside world

import { AppComponent } from './app.component';
import { ShipsComponent } from './ships/ships.component';

@NgModule({
  declarations: [AppComponent, ShipsComponent],
  imports: [BrowserModule, HttpClientModule], //after pasting line 3 include httpclientmodule so you can use it later
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
