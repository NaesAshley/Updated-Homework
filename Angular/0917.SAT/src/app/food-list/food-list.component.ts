import { Component, OnInit } from '@angular/core';
import { Food } from '../Food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  chosenFood?: Food;
  chooseFood(food: Food) {
    this.chosenFood = food;
    console.log(food);
  }

  foodList: Food[] = [
    //after you create the food.ts you do this
    {
      nameOfDish: 'pizza',
      rating: 5,
      mainIngredient: 'sauce',
      vegan: false,
      vegetarian: true,
      allergens: true,
    },
    {
      nameOfDish: 'taco',
      rating: 5,
      mainIngredient: 'meat',
      vegan: false,
      vegetarian: false,
      allergens: true,
    },
    {
      nameOfDish: 'pasta',
      rating: 3,
      mainIngredient: 'pasta',
      vegan: false,
      vegetarian: true,
      allergens: true,
    },
  ];
}
