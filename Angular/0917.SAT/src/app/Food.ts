//start of making an interface is ccreating a typescript file
export interface Food {
  nameOfDish: string;
  rating: 1 | 2 | 3 | 4 | 5; //1-5 typically, but when you say number its 1- infinity
  mainIngredient: string;
  vegan: boolean;
  vegetarian: boolean;
  allergens: boolean;
}

//export default food
