// const scoreDolphins = [96, 108, 89]; // calculate the average score for each team
// const scoreKoalas = [88, 91, 110]; //compare the avg. scores to determine the winner, and print it to the console
// const scoreDolphins2 = [97, 112, 101]; //
// const scoreKoalas2 = [109, 95, 123];

// let sumD = 0;
// for (let i = 0; i < scoreDolphins.length; i++) {
//   sumD += scoreDolphins[i];
// }
// console.log(sumD / 3);

// let sumK = 0;
// for (let k = 0; k < scoreKoalas.length; k++) {
//   sumK += scoreKoalas[k];
// }
// console.log(sumK / 3);

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log("you won!");
// } else {
//   console.log("sorry, but koala won");
// }

const scoreDolphins1 = (200 + 50 + 500) / 3;
const scoreKoalas1 = (200 + 95 + 50) / 3;
console.log(scoreDolphins1, scoreKoalas1);
const minimum = 100;

if (scoreDolphins1 > scoreKoalas1 && scoreDolphins1 >= minimum) {
  console.log("Dolphins you win, 100+");
} else if (scoreKoalas1 > scoreDolphins1 && scoreKoalas1 >= minimum) {
  console.log("Koalas won! and 100+");
} else if (scoreDolphins1 >= minimum && scoreKoalas1 >= minimum) {
  console.log("you both win!");
} else {
  console.log("you both lose");
}

const age = 25;
// age >= 18
//   ? console.log("i like to drink wine")
//   : console.log("i like to drink water");

const drink = age >= 18 ? "wine pass it" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`i like to drink ${drink}`);

//////////// try the ternary operator///////////////////////
//50-300 tip 15 if more tip 20% use the ternary operator!

const billTotal = 430;
const tipPercent =
  billTotal <= 300 && billTotal >= 50 ? billTotal * 0.2 : billTotal * 0.15;

console.log(
  `the total bill was ${billTotal}, the tip is ${tipPercent} and your total is ${
    tipPercent + billTotal
  }`
);
