import { Component, OnInit } from '@angular/core';
import User from 'src/user';

@Component({
  //this is relating to A COMPONENT
  selector: 'app-user-list',
  templateUrl: './user-list.component.html', //this pairs it
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {} //means nothing is being returned.
  /// void is the return type of the method
  //notice the placement in relevance to the parentheses

  // sayHello(): void {} //means no return
  //type for param is inside of the quotes
  //return type is right after parentheses with our param and before
  sayHello(name: string): string {
    return 'hello, i am' + name;
  } //returns strings

  // naes: User = {
  //   // this auto imports and inserts line 2
  //   firstName: 'Naes',
  //   lastName: 'de V',
  //   age: 24,
  //   sex: 'female',
  // };

  users: User[] = [
    // variableName: type []
    {
      firstName: 'Naes',
      lastName: 'de V',
      age: 24,
      sex: 'female',
    },
    {
      firstName: 'Jesse',
      lastName: 'Jordan',
      age: 2000,
      sex: 'female',
    },
    {
      firstName: 'Pauly',
      lastName: 'Pooot',
      age: 35,
      sex: 'male',
    },
  ]; //enforce interface on this array of obj
}
/// this will be separate than app.component.ts
