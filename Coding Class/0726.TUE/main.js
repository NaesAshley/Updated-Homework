//console.log("hello");

function sayHello(name) {
  console.log(`Hello, ${name}`);
}
sayHello("Naes");

function secondSayHello(name) {
  return `hello, ${name}`;
}

const result = secondSayHello(`Naes`); // => hello, angel
console.log(result);

// wrrite a function that adds any two numbers. and returns it
function addTo4() {
  return 2 + 2;
}

/*
parameters vs argument
parameter is the representation of the special variable that is the input to a function
argument is the specific value you give to the function
*/
function addTwoNums(num1, num2) {
  // <-- parameter. Representation of what the input is going to be
  return num1 + num2;
}

const addition = addTwoNums(100, 12345125);

/* use parameters to tell the function what its looking for
when setting the function = paramenet = it fills the role
argument = what youre putting into it
num1 num2 is representation
100 + 12345125 is the arguement 
*/

function outputArray(array) {
  console.log(array); //<-- array is parameter "when i call this parameter i'm going to give it something"
}

outputArray([1, 2, 3, 4]); // <-- Argument
outputArray([5, 6, 7, 8]); // <--argumet
/* scope is by block level -- it belongs between curly brace
 */

const array = [1, 2, 3];
const number = 12;
const name = "Naes de Venecia"; // <-- these are GLOBAL SCOPE because these can go anywhere

function grabOutsideVariable() {
  console.log(`hello ${name}`);
}

function nestedFunctionParent() {
  const age = 2000;

  function nestedFunctiionChild() {
    console.log(age);
  }
  nestedFunctiionChild(); // run child function
}

nestedFunctionParent; // run parent function
