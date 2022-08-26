console.log("hello world from node.JS");
const me = ["Naes", "de Venecia", 21];
0    1   2
console.log(); // how could i console log my age?
console.log(me[2]);

what is there's a second person?
const secondPerson = ["jordan", 30, "coleman"];

const descriptiveMe = { firstName: "Naes" };
console.log(descriptiveMe.firstName);
/*
const car = {
  color: "blue", //color is a key
  HP: 5000, // hp is a key
  Year: 2000, // year is a key
};
*/
//console.log(car.color);
//console.log(car);

//car.accident = true; //object is mutable -- we can change it after. can mutate a variable even if there is a cont in front of it
// this is an example of a mutation
//console.log(car);
//difference between mutation and reassignment
// const doesn't let you reassign. but  does not let you mutate

//car = {
// color: "red",
// hp: 3000,
//};

const self = {
  firstName: "Naes",
  lastName: "de Venecia",
  age: 21,
  birthday: 0224,
  favorite: {
    videoGame: "none",
    movie: "HP",
    tvShow: "GOT",
  },
};

console.log(self.favorite.movie);

if (self.favoriteMovie === undefined) {
  self.favoriteMovie === "GOT";
}
console.log(self.favoriteMovie);

/* classes? 'facotires that generate something
camel casing - mostly used for quite alot of  languages. but mostly used in JS
snake casing - mostly used in python
pascal casing - mostly  used for classes. in language and maybe some special language convention
 */

// camel casing = keep the first word/letter lowercase
// the rest of the words uppercase
// e.g
const multipleWordCamelCaseExample = null;

//snake casing
// connects every word with an underscore kind of like a snake
const snake_casing_example = null;

//pascal casing
//just like camel casing
// but we capitalize every word
const PascalCasingExample = null;
