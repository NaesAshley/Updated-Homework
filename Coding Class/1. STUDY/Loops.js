const jonas = {
  firstName: "jonas",
  lastName: "coleman",
  birthYar: 1993,
  job: "student",
  friends: ["sunny", "lorenzo", "aileen"],
  hasDriversLicense: true,
};

///// example of for loop //////
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

////// example of while loop /////
// let rep = 1;
// while (rep <= 10) {
//this is a condition. running while it is true being less than or equal to 10
//while loop can only specify a condition
// console.log(`Lifting weights repetition ${rep}`);
// rep++;
// }
//while loop is more versatile than the for loop
// can be used at variety
// all while needs is to have the condition to be true to keep running

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`you rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop i about to end");
}

///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////Coding challenge//////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bills) {
  return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  //calculate the array called arr as the agument this function cals average of all numbers
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]; //same as sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
