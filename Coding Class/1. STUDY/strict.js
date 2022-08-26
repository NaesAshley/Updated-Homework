"use strict";
// forbids to do certain things
// create visible errors in the developer console in comparison
// to other consoles allowing it to fail silently

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// FUNCTION = is a piece of code that we can re-use over and over again
// variable holds value, but function has one or more line complete lines of code

function logger() {
  console.log("my name is naes");
} //within this block of curley braces is a function

logger();
logger();
logger();

// function fruitProcessor(apples, oranges) {
//   //parameters are specific
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice; //return keyword to return any value from the function
// }

// const appleJuice = fruitProcessor(5, 0); //these would be the input of the fruit processor info
// // 5 apples, 0 orages,vthe 5 & 0 is values are called the argument
// console.log(appleJuice);
// //WHAT HAPPENED?
// // we called the fuitproccessor with arugments, 5,0
// // when functions are funning, we built and return the value and function
// //OR we can use:
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(fruitProcessor(2, 4));

// //or

// const juice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// these are FUNCTION DECLARATION are the above examples//////////
//////////////////////////////////////////////////////////////////

// function calcAge1(birthYear) {
//   const age = 2022 - birthYear;
//   return age;
// } // this takes up more code then needed so to concise it do

//below is function declaration
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// // console.log(age1);

// const calcAge2 = function (birthYear) {
//   //the variable of "const calcAge2" will hold the function of the rest instead of separating it
//   return 2022 - birthYear;
// };
// const age2 = calcAge2(1995);
// console.log(age2, age2);

/////arrow function///shorter and faster to write //
const calcAge3 = (birthYear) => 2022 - birthYear; // you don't need curley braces and the value will automatically return
const age3 = calcAge3(1997);
console.log(age3); // simpliest form only 1 line of code

// //how many years have left before retirement//
// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   //return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1993, "Naes"));
// console.log(yearsUntilRetirement(1991, "jordan"));

///try another except  CALL ONE FUNCTION WITHIN ANOTHER FUNCTION
const cutPieces = function (fruit) {
  return fruit * 4;
};
const fruitProcessor = function (apples, oranges) {
  const applePieces = cutPieces(apples);
  const orangePieces = cutPieces(oranges);
  const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(fruitProcessor(2, 3));

//TRY AGAIN

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  // return retirement;
  // return `${firstName} retires in ${retirement} years`;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already reached retirement`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1993, "naes"));
console.log(yearsUntilRetirement(1943, "jimmmy"));

///////FUNCTION DECLARATION /////////
// function that can be used before it's declared
// function calcAge(birthYear) {
//   return 2037 - birthYear;
// }

///////FUNCTION EXPRESSIONS /////////
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// essentially a function value stored in a variable

/////// ARROW FUNCTION /////////////
// great for a quick one-line functinons.has no this keyword
// const calcAge = (birthYear) => 2037 - birthYear;

/////////////////CHALLENGE//////////////////////
//arrow function ' calcaverage' to calculate the average of 3 scores
const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 200);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (scoreDolphins, scoreKoalas) {
  if (scoreDolphins >= scoreKoalas * 2) {
    console.log(`Dolphins win ${scoreDolphins} vs ${scoreKoalas}`);
  } else if (scoreKoalas >= scoreDolphins * 2) {
    console.log(`Koalas win ${scoreKoalas} vs ${scoreDolphins} `);
  } else if (scoreDolphins == scoreKoalas) {
    console.log(`We have a Tie! ${scoreDolphins}vs. ${scoreKoalas}`);
  } else {
    console.log("there is no winner!");
  }
};

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(600, 200);

/// now reassign scroredolphins and koalas
scoreDolphins = calcAverage(85, 54, 41); // when you reassign you don't need to include let anymore
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
