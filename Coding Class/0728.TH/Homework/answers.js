/* comfort with html & css?
- 3.5
*/

//////////////////////////////////// Part II: JavaScript reps /////////////////////////////////////////////////////
///////////////////////////////////////////easy going///////////////////////////////////////////////////////////////

for (let i = 1; i <= 20; i++) {
  console.log("counting up to 20:" + i);
}

// // counting 20-1
for (let i = 20; i >= 1; i--) {
  console.log("counting down to 1:" + i);
}

// counting 0-200 even numbers
for (let i = 0; i <= 200; i += 2) {
  console.log("this is even up:" + i);
}

//counting 200-0 even numbers
for (let i = 200; i >= 0; i -= 2) {
  console.log("this is even down:" + i);
}

/////////////////////////////////////////Fizz Buzz////////////////////////////////////////////////////
// 1-100
for (let i = 1; i <= 100; i++) {
  console.log("this is Q1:" + i);
}

////if number is divisibleby 3 log "fizz" /////
const divisibleByThree = (num) => {
  if (num === 0) return true;
  if (num < 0) return false;
  return divisibleByThree(num - 3);
};

for (let i = 1; i <= 96.8; i++) {
  if (divisibleByThree(i)) {
    console.log(i + "fizz");
  }
}

//// if number is divisibleby 5 log "buzz" /////
const divisibleByFive = (num) => {
  if (num === 0) return true;
  if (num < 0) return false;
  return divisibleByFive(num - 5);
};

for (let i = 1; i <= 100; i++) {
  if (divisibleByFive(i)) {
    console.log(i + "Buzz");
  }
}

//// if number is divisibleby 5 log "buzz" & number is divisibleby 3 log "fizz"/////
const byFive = (num) => {
  if (num === 0) return true;
  if (num < 0) return false;
  return byFive(num - 5);
};
const byThree = (num1) => {
  if (num1 === 0) return true;
  if (num1 < 0) return false;
  return byThree(num1 - 3);
};
for (let i = 1; i <= 100; i++) {
  if (byFive(i)) {
    console.log(i + "Buzzer");
  } else {
    if (byThree(i)) {
      console.log(i + "Fizz--");
    }
  }
}

///

////////////////////////////////////////////// Wild Wild Life //////////////////////////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

console.log(plantee); //number 1
plantee[2]++;
console.log(plantee);

console.log(wolfy); // number 2
wolfy[3] = "Gotham City";
console.log(wolfy);

console.log(dart); // number 3
dart.push("Hawkins");
console.log(dart);

console.log(wolfy);
wolfy[0] = "Gameboy";
console.log(wolfy);

// class Wild {
//   constructor(nameParam, speciesParam, ageParam, homeParam) {
//     this.name = nameParam;
//     this.species = speciesParam;
//     this.age = ageParam;
//     this.home = homeParam;
//   }
// }

// const wolfy = new Wild("Wolfy", "wolf", 16, "Yukon Territory");
// console.log(wolfy);

// const sharky = new Wild("Sharky", "shark", 20, "Left Coast");
// console.log(sharky);

// const plantee = new Wild("Plantee", "plant", 5000, "Mordor");
// console.log(plantee);

// const porgee = new Wild("Porgee", "Porg", 186, "Ahch-To");
// console.log(porgee);

// const dart = new Wild("D'Art", "Demogorgan Dog", 2, "Upside Down");
// console.log(dart);

////////////////////////////////////////////Yell at the Ninja Turtles //////////////////////////////////////////////////
const ninjaTurtles = ["donatello", "leonardo", "raphael", "michaelangelo"];
{
  for (const item of ninjaTurtles) {
    console.log(item.toUpperCase());
  }
}

////////////////////////////////////////////////Methods, Revisited///////////////////////////////////////////////////////////
const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];
console.log(favMovies.indexOf("Titanic"));

favMovies.sort();
console.log(favMovies); //

favMovies.pop();
console.log(favMovies);

favMovies.push("Guardians of the Galaxy");
console.log(favMovies);

favMovies.reverse;
console.log(favMovies);

favMovies.shift();
console.log(favMovies);

favMovies.unshift();
console.log(favMovies);

console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(3, 1, "Avatar"); //we're deleting just one, and inputing Avatar to replace it

//let index = favMovies.indexOf("Django Unchained") //secondary way of doing the same as above
//favMovies.splice(index,1,'Avatar')

favMovies.length / 2;
let middleinx = Math.floor(favMovies.length / 2);
let halfOfFav = favMovies.slice(middleinx - 1);
console.log(halfOfFav);

////////////////////////////////////////////////////////Where is Waldo///////////////////////////////////////////////////////////////////
const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];

console.log(whereIsWaldo); //////Remove Eggbert
delete whereIsWaldo[1];
console.log(whereIsWaldo);

console.log(whereIsWaldo[2][2]); // Change "Neff" to "No One"
whereIsWaldo[2][2] = "No One";
console.log(whereIsWaldo[2]);

console.log(whereIsWaldo[3][1][1]); //Access and console.log "Waldo"

// /////////////////////////////////////////////////////////Excited Kitten///////////////////////////////////////////////////////

const kittyTalk = [
  "meow",
  "human, why are you taking pictures of me?",
  "...the catnip made me do it...",
];
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    let randomNum = Math.floor(Math.random() * kittyTalk.length);
    console.log(kittyTalk[randomNum]);
  } else {
    console.log("Love me, pet me! HSSSSSS!");
  }
}

// /////////////////////////Find the Median///////////////////////////////
const nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12,
];

nums.sort();
const median = Math.floor(nums.length / 2);
console.log(nums[median]);

//////////////////////Hungry for more?//////////////////////////////////
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps",
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],
//   [
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs",
//   ],
//   [
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans",
//   ],
// ];
