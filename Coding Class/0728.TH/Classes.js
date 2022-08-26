// always capitalize the first letter of a class ********************
// that is what indicated to the developer it's a classs
// developers when they see a capital name think of a class

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

/*
class Vehicle {
  constructor(colorParam, numberOfTiresParam, YearParam) {
    //cnstructor is a special function to add info to your class/obj
    this.objectColor = colorParam;
    this.ObjectNumberOfTires = numberOfTiresParam; //"this reference specific instance of the class"
    this.ObjectYear = yearParam;
  }
} //defining a class
// use a class || instantiate an object
// instantiate object = create object from class
// use new keyword

const v1 = new Vehicle("red", 4, "2020");
console.log(v1);

const v2 = new Vehicle("green", 2, "2010");
console.log(v2);
*/

class Human { ********************** 
  constructor(hairColorParam, eyeColorParam, heightParam, age, Name) {
    this.objectHairColor = hairColorParam;
    this.objectEyeColor = eyeColorParam;
    this.objectHeight = heightParam;
    this.age = age;
    this.Name = Name;
  }

  introduction() {
    console.log("Hello! my name is" + "" + this.Name);
  }
}
// getters and setters
get EyeColor() {
  return this.eyeColor;
}

set EyeColor() {

}



const person = new Human("green", "blone", 5, 30, "june");
console.log(person);

const person1 = new Human("brown", "brown", 6, 28, "jordan");
console.log(person1);

person.introduction();
person1.introduction();

// what is a Method?
// Hint - a constructor is a method
// a method is a function inside of an object
// when you want to create a method inside

