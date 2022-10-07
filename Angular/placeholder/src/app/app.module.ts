import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //create this to make an API request similar to "FETCH"
import { MatCardModule } from '@angular/material/card'; //import from api reference for angular mat card
import { FormsModule } from '@angular/forms'; //used to be able to edit but will prepopulate from your form
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

//this is angular built in fetch system.
@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
