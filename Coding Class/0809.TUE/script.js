// o of log n = data set get smaller - your work load gets smaller
// o1 constant time - same amount of time regardless of how big the input you have. it takes the same amount of time.- use it as often as possible
//o of N linear =number of actions grows one to one
// n log n = n represents input
// O<(n^2)for every step you take you take n amount of steps(or close) and then take the next step
// -- nested loops are infamous for O(n^2) time complexity
// --- when you see nested loops it's likely to be O(n^2)
// --

const wordOccurrence = (word, phrase) => {
  let result = 0;
  const array = phrase.split(" "); //built in js methods have time complexity
  for (let i = 0; i < array.length; i++) {
    if (word.toLowerCase() === array[i].toLowerCase()) {
      result += 1;
    }
  }
  return result;
};
// o of N linear b/c you go through every single just one time
//** o(n) b/c of the phrase.split

const bubble_sort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - 2; j++) {
      if (list[j + 1] < list[j]) {
        const temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
};
//O(n^2) b/c it loops over and starts again or (let i = 0; i < list.length - 1; i++) {
//    for (let j = 0; j < list.length - 2; j++)

const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
// N because it goes down one by one
// linear?

const sum = (a, b) => {
  return a + b;
};
// constant b/c it doesn't matter how big it is

const logNestedArray = (nestedArray) => {
  for (let n = 0; n < nestedArray.length; n++) {
    for (let m = 0; m < nestedArray[n].length; m++) {
      console.log(array[n][m]);
    }
  }
  for (let n = 0; n < nestedArray.length; n++) {
    console.log(`${nestedArray[n]} is at index ${n}`);
  }
};
// o of log n  NOT On^2

const isPalindrome = (input) => {
  const stack = [];
  let output = "";
  for (let i = 0; i < input.length; i++) {
    stack.push(input[i]);
  }
  while (stack.length) {
    output += stack.pop();
  }
  return output == input;
}; // n b/c it push puts it at the end so its constant not linear
// .pop is constant you don't have to shift all the numbers

const sumOfDivisors = (n) => {
  let result = 0;
  let i = 1;
  while (i < n) {
    if (n % i == 0) {
      //should of been i++
      result += i;
    }
  }
  return result;
};
// linear because it starts at 1 goes to n
// infinite loop is still linear

const printAllNumbersThenSumPairs = (numArray) => {
  numArray.forEach((num) => console.log(num)); //linear
  numArray.forEach((num, index) => {
    //linear
    if (index < numArray.length - 1) {
      console.log(num + numArray[index + 1]);
    }
  });
};
// this would be N O(n) is the same as (n)

const isPrime = (num) => {
  if (num == 1 || num == 2) {
    return false;
  }
  for (let i = 2; i < num - 1; i++) {
    if (num % 1 == 0) {
      // constant time, bad mistake wrong
      return false;
    }
  }
  return true;
}; // linear it still goes by 1

loop;
