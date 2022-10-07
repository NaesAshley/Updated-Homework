import { Component, OnInit } from '@angular/core';
import { PlaceholderService } from '../placeholder.service';
import { SpeciesSingle } from '../types/Species';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css'],
})
export class SpeciesComponent implements OnInit {
  species: SpeciesSingle[] = [];

  constructor(private placeholderService: PlaceholderService) {}

  ngOnInit(): void {
    this.getSpeciesSingle();
  }

  getSpeciesSingle(): void {
    this.placeholderService.getSpeciesSingle().subscribe((data) => {
      console.log(data);
      this.species = data.results;
    });
  }
}
