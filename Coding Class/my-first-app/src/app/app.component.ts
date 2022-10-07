import { Component } from '@angular/core';

interface person {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-app';
  name: string = 'Naes';
  person = {
    firstName: 'Naes',
    lastName: 'de Venecia',
    age: 
  }
}


