// angular is meant to be modular
//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';

@NgModule({
  //"@" is called a decorator. It knows it's a component and you should look for information

  declarations: [AppComponent, FoodListComponent],
  imports: [BrowserModule],
  providers: [], //interact with browser
  bootstrap: [AppComponent],
})
export class AppModule {}
