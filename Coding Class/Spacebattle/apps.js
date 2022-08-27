// const { i } = require("mathjs");

//// ownship
let spaceShip = {
  name: "USS Schwarzenegger",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
};

let NameArray = [
  "SpainSailing",
  "JapanJetting",
  "MexicoHeat",
  "FranceGarden",
  "BelgiumWaffles",
  "IndianTaj",
  "ThaiBoating",
  "GermanyVillage",
];

class AlienShipClass {
  //class to make objects. capitalized class. "skeleton"
  constructor(alienName) {
    //constructor takes in information
    this.name = alienName; // alienName is representation of data to be determined untill "called"
    this.hull = Math.floor(Math.random() * 4) + 3; //4 values so thats why 4 then it starts at 3
    this.firepower = Math.floor(Math.random() * 3) + 2;
    this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10; //3 values that are available but we start at 6 so +6 then /10 because its decimal .6
  }
}

// const testAlienShip = new alienShip (alienNameArray[0]) // ccould do a loop
// const testAlienShip = new alienShip (alienNameArray[1])
// const testAlienShip = new alienShip (alienNameArray[2])

const fleetArray = []; //every time i create a new alienship it WILL push that name here. READING TOP DOWN. // a containter for the obj.
for (let i = 0; i < NameArray.length; i++) {
  // then loops
  let newAlien = new AlienShipClass(NameArray[i]); //calling it TO MAKE ALIEN SHIPS
  fleetArray.push(newAlien); // TELLING THE NEW SHIPS TO BE PART OF fleetArray
  // need to store this information we created
}

console.log(fleetArray);

///// now how to attack? with those conditions?////
/*
attack ship1
if it survives
if attacks you //if e
you survive and attack until hull <= 0
or you die and lose game
if it dies - you go to next round
*/

function spaceFight() {
  for (let i = 0; i < fleetArray.length; i++) {
    //entire loop keep going until length then stop
    while (fleetArray[i].hull >= 0 && spaceShip.hull >= 0) {
      // if current ship is >0 and my ship is > 0 "do this"
      const hullDamage = spaceShip.hull - fleetArray[i].firepower; // [i] means of this index,
      const alienHullDamage = fleetArray[i].hull - spaceShip.firepower; // calculated the alien damage
      if (spaceShip.accuracy >= Math.random()) {
        fleetArray[i].hull = alienHullDamage; //reassigning the new vlue
        if (fleetArray[i].hull <= 0) {
          console.log(
            `${fleetArray[i].name} is dead and ${spaceShip.name} has won the battle by remaining score of ${spaceShip.hull}/20  `
          );
          let questionUser = confirm(
            "Do you want to keep fighting? HIT 'OK' = Continue || 'CANCEL' = Retreat"
          );
          if (questionUser === false) {
            console.log("YOU'RE DEAD MATE");
            return;
          }
          break;
          // const questionUser = prompt("would you like to continue?");
        }
        console.log(
          `you've attacked the ${fleetArray[i].name} their score is now ${fleetArray[i].hull}`
        );
      } else {
        console.log(
          `You've attacked and missed ${fleetArray[i].name}! Their score is ${fleetArray[i].hull}/20`
        );
      }

      if (fleetArray[i].accuracy >= Math.random()) {
        //this random number, if < my accuracy they will hit me.
        spaceShip.hull = hullDamage; //reassigning the new vlue
        console.log(
          `${fleetArray[i].name} has attacked & hit you and your score is now ${spaceShip.hull}/20`
        );
        if (spaceShip.hull <= 0) {
          console.log("You're DEAD MATE!");
          break;
        }
      } else {
        console.log(`They've missed! your score is ${spaceShip.hull}/20`);
      }
    }
  }
  if (spaceShip.hull >= 1 && fleetArray[fleetArray.length - 1].hull <= 0) {
    // looks at the spaceShip hull if true then calls the array[the last one of the array's.hull which is the length] if equal or <0
    console.log("GURHHhhhhhhh YOU WON!");
  }
}

spaceFight();
