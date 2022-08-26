const spaceFleet = {
  alienShip1: [ 'SpainSailing', thisHull, thisFirepower, thisAccuracy],
  alienShip2: ["JapanJetting", thisHull, thisFirepower, thisAccuracy],
  alienShip3: ["ThaiBoating", thisHull, thisFirepower, thisAccuracy],
  alienShip4: ['IndianTaj', thisHull, thisFirepower, thisAccuracy],
  alienShip5: ['BelgiumWaffles', thisHull, thisFirepower, thisAccuracy],
  alienShip5: ['FranceGarden',thisHull, thisFirepower, thisAccuracy ],
  alienShip6: ['MexicoHeat',thisHull, thisFirepower, thisAccuracy],
};

function thisHull(3, 6) {
  return Math.random() * (6 - 3) + 3;
};
console.log(spaceFleet.alienShip1)

function thisFirepower(2,4) {
  min = Math.ceil(4);
  max = Math.floor(2);
  return Math.floor(Math.random() * (max-min+1)) + min;
};

function thisAccuracy(.6,.8) {
  min = Math.ceil(.8);
  max = Math.floor(.6);
  return Math.floor(Math.random() * (max-min+1)) + min;
};

console.log(spaceFleet)





////////////////////////** */
let spaceShip = {
  name: "the USS Schwarzenegger",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
  hullDamage(damage) {
    return this.hull = this.hull - damage;
  }
}

// button.addEventListener("click", () => {
//   document.getElementById('label-wins');
//   display
// });


class SpaceFleet() { // work on class 
  this.Name = alienName,
  this.hull = Math.floor(Math.random() * 4) + 3; //4 values so thats why 4 then it starts at 3
  this.firepower = math.floor(Math.random() * 3) + 2;
  this.accuracy = (math.floor(math.random() * 3) + 6) /10; //3 values that are available but we start at 6 so +6 then /10 because its decimal .6

};


let alienName = ['SpainSailing', "JapanJetting", 'MexicoHeat', 'FranceGarden', 'BelgiumWaffles', 'IndianTaj', "ThaiBoating"]
console.log(spaceFleet)  //take array and have it to create a space fleet. 
alienFleet.push(new spaceFleet(alienName[0])); 


/////// i know there's a loop 
for (let i=0; i< alienName.length; i++) {
  alienFleet.push(new spaceFleet(alienName[i]));
}

const hullDamage = alienships.hull - alienShips.firepower

///////////////// attack ideas 
function spaceFight = () {
  for (let i = 0; i < alienName.length; i++) { // this tells the code to keep going
    while (spaceShip.hull > 0) { //while my ship is still alive which is greater than 0 complete this function 
     if (alienShips.accuracy <= 0.8) {
      console.log (`you are hit! your score is ${hullDamage}:20`)
      const hullDamage = spaceShip.hull - alienShips.firepower 
     } else 
  

  }
}


// what about if thie alien ship hull score is not equal to 0??
// can we use turnary within this??
function spaceFight = () {
  for (let i = 0; i < alienName.length; i++) { // this tells the code to keep going
    while (spaceShip.hull > 0) { //while my ship is still greate than 0 complete this function 
     if (alienShips.accuracy <= 0.8 && alienShips.hull > 0 ? `You've been hit score: ${hullDamage}/20` : `they've missed! score: ${hullDamage}/20`): //if accuracy is <= .8 the ship hits you 
    } else if (alienShips.hull = 0) {
      console.log ("you won! move to the next ship!")
    } else if (spaceShip.hull = 0) {
      console.log ('you lost!' )
  }
}