import { Component, OnInit } from '@angular/core';
import { Ship } from '../Ship';
import { ShipsServiceService } from '../ships-service.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css'],
})
export class ShipsComponent implements OnInit {
  ships: Ship[] = []; //new

  constructor(private shipsService: ShipsServiceService) {} // dependency injection - constructor injection
  //privte shipservice along doesn't mean anything
  //Shipsserivices will then create the objects

  ngOnInit(): void {
    this.getShips(); //relates to line 10 of "ships"
    // line 18 is just returning an array in ship-service.ts
  }

  getShips(): void {
    this.shipsService
      .getShips()
      .subscribe((data) => (this.ships = data.results));
  }
}
