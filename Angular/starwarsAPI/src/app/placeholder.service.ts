import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpeciesResponse, SpeciesSingle } from './types/Species';

@Injectable({
  providedIn: 'root',
})
export class PlaceholderService {
  BASE_URL = 'https://swapi.dev/api/species/'; /// io think it's related to this?

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getSpeciesSingle(): Observable<SpeciesResponse> {
    return this.http.get<SpeciesResponse>(this.BASE_URL);
  }
}
