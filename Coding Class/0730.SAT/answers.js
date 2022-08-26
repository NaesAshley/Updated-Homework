// What are the three keywords that you could use in order to create a variable?
////// var, let and const

// When do you use each of the keywords?
///// var - not used as often now, but kept for backwards compatibility
///// let - plan on changing variable over time
///// const - doesn't change

// What are their similarities?
////// all used to create variables
////// all define values

// What are their differences?
////// let, can be changed
////// const, cant be declared if it's already declared. You can mutate it though if inside.
////// var, cant be changed

// Create a variable for each primitive data type that exists in JavaScript (Except bigint and Symbol).
/////// String
const me = ["naes", "de", "chicago"];

///////number
num = 25;

/////// bigint skip

///////Boolean
let orange = true; //can be use within a loop

/////// undefined
let grape = undefined; // doesn't exist - variable that doesn't exist

//////// null
let blue = null; //it exists, but variable has not been assigned yet, can be a placement

// Under each variable explain the primitive data type. And when or why you would use the data type of the variable.

/////////Now that you created variables. Reassign 2 of them.
num = 26;
orange = false; //don't include let because it's creating a new variable instead of reassigning

////////////By just looking at the following expressions, determine in your mind whether
////////////or not each will evaluate to true or false. After you made your guess. Test each result
////////////by using console.log
console.log(999 > 999); // false

console.log(999 == 999); //true

console.log(999 != 999); // ! is called a bang operator - "not equal" False

console.log(5 >= -4); //true

console.log(100 <= -100); //false

console.log(20 + 5 < 5); // false

console.log(81 / 9 == 9); //true

console.log(9 != 8 + 1); //false

////////////////////Using the provided variable definitions, replace the blanks (underscores)
///////////////////with a mathematical or boolean operator that evaluates the expression to true
///////////////////(some may have more than one right answer, just choose one)
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kelvin";
const f = false;

console.log(a < b);

console.log(c > d);

console.log("Name" === "Name");

console.log(a < b < c);

console.log(a + a < d);

console.log(e != "Kevin"); //not true - "i expect it not to be true"

console.log(48 == "48");

console.log(f != e);

/* strings are a very special primitive data type. The reason they're special is because they are
the first data type which introduces methods to the mix. The effective creation, usage, modification,
and even deletion of strings is very important to programming as most information will be a string.
Here are some major string methods. Pick any 3 and research what they do and how to use them. 
And run your files!!!
*/

// -1 if not found.
// .charAt() // Returns a single character at the specified index of a string.
let fish = "golden ";
console.log(fish.charAt(0).toUpperCase(0));

// .concat()

// .includes()

// .indexOf() //Searches a string for a given value and returns the first index
// //if found. Returns

// .slice() // Returns a selected portion of a string.
// let cow = "white";
// console.log(cow.slice(2, 4)); //.slice is a method which are special functions
// //within a class

// .split() // Returns a new array of substrings based on a given string.

// .substring() // Returns a part of a string from a given
// // starting index or between start and end index. Index starts at zero.

// .toLowerCase()

// .toUpperCase()

// .trim()

////////////Create 2 variables.
////////////One variable with your full name
////////////One variable with your favorite food

const name = "naes";
const foodFavorite = ["Pizza", "Cake", "Pasta", "tacos"];
console.log(
  `Hello my name is ${name} and my favorite food is ${foodFavorite[3]}.`
);

//string concatenation
//template literals
console.log(
  "Hello my name is " + name + " and my favorite food is " + foodFavorite[2]
);

//////////Arrays aren't a primitive data type but they are still highly important to understand how to create
////////more complex programs. When you get information from a database, such as
/////////a list of active users, they will all be returned in an array.
/////////Here are some major array methods. Pick any 3 and research what they do and how to use them. Make
////////sure to type up some examples of usage in your code. And run your files!!!
// .concat()
// .filter()
// .find()
// .forEach()
// .includes()
// .indexOf()
// .join() //Will concatenate all strings in a given array
const elements = ["Fire", "Air", "Water"];
console.log(elements.join());

// .map()
// .pop()
// .push()
// .reverse() // The reversed array.
const cars = ["BMW", "Mercedes", "Audi"];
console.log(cars);
cars.reverse();
console.log(cars);

// .shift() // shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
cars.shift();
console.log(cars);

// .slice()
// .sort()
// .splice()
// .unshift()

////////Control flow is how you redirect your code logic to different parts of your program
//////How you take certain actions when certain criteria is met.
/*
There are a few major ways to control flow in your programs

if statements
if/else statements
if/else if/else statements
loops
for loops
while loops
A few other loops we didn't learn in class (yet)
*/

//// Create a loop that will print "hi" 15 times.
for (let hiFifteen = 0; hiFifteen <= 15; hiFifteen++) {
  console.log("hi");
}

//// Create a loop that will print "YEP!" 30 times.
for (let yupThirty = 0; yupThirty <= 30; yupThirty++) {
  console.log("yup");
}

///// Loop through an array (use both a for loop and a while loop) //while loop so long specific condition is true //for loop
const stores = ["target", "walmart", "starbucks", "fishstore", "kroger"];
for (let i = 0; i < stores.length; i++) {
  // go over a set up data
  console.log(stores[i]);
}

let counter = 0;
while (counter > stores.length) {
  // why would we use while over for? do while when condition is true
  console.log(stores[counter]);
  counter++;
}

for (let i = 2; i >= 0; i--) {
  console.log(stores[i]);
}

let counter1 = 2;
while (counter1 >= 0) {
  // why would we use while over for?
  console.log(stores[counter1]);
  counter1--;
}

/////Loop from left to right
///see line 197
// Loop from right to left
for (let i = 0; i < stores.length; i++) {
  stores.reverse();
  console.log(stores);
}

//// Create a loop that logs the EVEN numbers from 98-0 (descending)
for (let i = 98; i >= 0; i--) {
  if (i % 2 === 1) {
    console.log(i);
  } else {
    console.log(i % 2);
  }
}

//// Create a loop that logs the numbers from 3-90 that are multiples of 3 (ascending)
for (let i = 3; i <= 90; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

///// Create a while loop that'll iterate from both ends of the array at the same time.
//////And meets in the middle. When it meets in the middle stop the loop.
/////for (let i = 0; i < stores.length && ; i++) {  //whileloop
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/*
problem - iterate from the left and right side at the same time. And when you get to the middle. Stop looping.

left [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] right
                    ^
for loop iterated given a range
  0 - end of an array
  end of an array - 0

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
             ^  ^ - these will pass each other and never "meet"
[1, 2, 3, 4, 5, 6, 7, 8, 9]
            ^^ - these will fall in place together and actually "meet"
console.log(array[left], array[right]);
console.log(array[0], array[9]);
console.log(array[1], array[8]);
console.log(array[2], array[7]);
...
console.log(array[4], array[5]);

left hand side idx is increasing by 1 every iteration
right hand side idx is decreasing by 1 every iteration

when the pointers meet. Break. Stop the loop
if the pointers are equal - break
if the left idx is greater than the right idx - break

while leftIdx < rightIdx keep looping
*/

let leftIdx = 0;
let rightIdx = array2.length - 1; // always do this when starting from the last idx
while (leftIdx <= rightIdx) {
  console.log(array2[leftIdx], array2[rightIdx]);
  leftIdx++;
  rightIdx--;
}
``;

////// Fizzbuzz
///// Create a loop. That counts from 1-100. When you have a number divisible by 3 console.log "Fizz".
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log([i] + " " + "fizz");
  }
}
//// When you have a number divisible by 5 console.log "Buzz". When you have a number divisible by both 5 and 3 console.log "FizzBuzz"
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log([i] + "fizzbuzz");
  } else if (i % 5 == 0) {
    console.log([i] + "buzz");
  }
}
// another way
for (k = 1; k <= 100; k++) {
  if (k % 3 === 0 && k % 5 === 0) {
    console.log([k] + "fizzbuzz");
  } else if (k % 5 == 0) {
    console.log([k] + "buzz");
  }
}

//// Create a conditional that will output the grade of a student according to this image

const grade = 95;
if (91.5 <= grade && grade <= 100) {
  console.log("you got an A");
} else if (88.5 <= grade && grade <= 91.5) {
  console.log("you get an A-");
} else if (84.5 <= grade && grade <= 88.5) {
  console.log("you get a B+");
} else if (81.5 <= grade && grade <= 84.5) {
  console.log("you got a B-");
} else if (77.5 <= grade && grade <= 81.5) {
  console.log("you got a C+");
} else if (74.5 <= grade && grade <= 77.5) {
  console.log("you got a C");
} else if (70.5 <= grade && grade <= 74.5) {
  console.log("you got a C-");
} else if (64.5 <= grade && grade <= 67.5) {
  console.log("you got a D");
} else {
  console.log("you got and F");
}
