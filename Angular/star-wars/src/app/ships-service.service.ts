import { Injectable } from '@angular/core';
import { Ship, ShipResponse } from './Ship';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShipsServiceService {
  url = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getShips(): Observable<ShipResponse> {
    // this.url + 'starships'; //this is called concat
    //this.url = an instance of line 9
    return this.http.get<ShipResponse>(this.url + 'starships'); //this gives you the full url?
  }
}
