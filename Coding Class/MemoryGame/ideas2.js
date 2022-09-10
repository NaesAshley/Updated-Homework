function getRandomNum() {
  return Math.floor(Math.random() * 6); // get number 0-6
}

let matchGrid = document.querySelectorAll("div.cell");
console.log(matchGrid); // called my cells to see if they're being called -- this is a node -- need to point an index to it
// function actionPair() {
//   let img = document.createElement("img");
//   img.src = `./Memory Game/${i}.png`;
// }

const dogCards = [
  // `./Memory Game/1.png`,
  // `./Memory Game/2.png`,
  // `./Memory Game/3.png`,
  // `./Memory Game/4.png`,
  // `./Memory Game/5.png`,
  // `./Memory Game/6.png`,
]; // placed my dog images in this array
// let dogCards = [];

for (let i = 1; i <= 6; i++) {
  dogCards[i - 1] = new Image(); //makes an image in html
  dogCards[i - 1].src = `./Memory Game/${i}.png`;
}

let imgA = document.getElementById("divA");
imgA.appendChild;

function memoryGameStart() {
  // let i = 0;
  // while (i < matchGrid.length) {
  //   //how do i get the match now to pair with the images?

  //   i++;
  // }

  for (let i = 0; i < matchGrid.length; i++) {}
}
////// I want my images to be in matchgrid

///////BRUCE ////////
https: function getRndInteger() {
  return Math.floor(Math.random() * (6 - 1)) + 1;
}

ranNumA = getRndInteger();
ranNumB = getRndInteger();

let cellA = document.createElement("img");
cellA.height = 200;
cellA.src = `./Memory Game/${ranNumA}.png`;

let cellB = document.createElement("img");
cellB.height = 200;
cellB.src = `./Memory Game/${ranNumB}.png`;

// let cells = document.queryselectorall("cells");
// function actionPair() {
//   let img = document.createElement("img");
//   img.src = `./Memory Game/${i}.png`;
// }

//cellA.src = './Memory Game/7.png'

let imgA = document.getElementById("divA");
imgA.appendChild(cellA);

let imgB = document.getElementById("divB");
imgA.appendChild(cellB);
/////////////////////////////////////////////////////////////////////second copy paste////////////////////////////////////
function getRandomNum() {
  return Math.floor(Math.random() * (6 - 1)) + 1; // get number 0-6
}
// randomNumA = getRandomNum(); //if you don't do this they will all be the sameeeee one
// randomNumB = getRandomNum();
// randomNumC = getRandomNum();
// randomNumD = getRandomNum();
// randomNumE = getRandomNum();
// randomNumF = getRandomNum();
// randomNumG = getRandomNum();
// randomNumH = getRandomNum();
// randomNumI = getRandomNum();
// randomNumJ = getRandomNum();

////////////////////////////////////these images will be onclick images///////////////////////////
const matchGrid = document.querySelectorAll(".cell");
console.log(matchGrid); // called my cells to see if they're being called -- this is a node -- need to point an index to it

// let cellA = document.createElement("img");
// cellA.src = `./Memory Game/${randomNumA}.png`;

// let imgA = document.getElementById("divA"); //
// imgA.append(cellA);

// let cellB = document.createElement("img");
// cellB.src = `./Memory Game/7.png`;

// let imgB = document.getElementById("divB");
// imgB.append(cellB);

// let cellC = document.createElement("img");
// cellC.src = `./Memory Game/${randomNumC}.png`;

// let imgC = document.getElementById("divC");
// imgC.append(cellC);

// let cellJ = document.createElement("img");
// cellJ.src = `./Memory Game/${randomNumJ}.png`;

// let imgJ = document.getElementById("divI");
// imgJ.append(cellJ);

let cardDeck = [
  "divB",
  "divA",
  "divC",
  "divD",
  "divE",
  "divF",
  "divG",
  "divH",
  "divI",
  "divJ",
  "divK",
  "divL",
];

/////////////////////////need to do on click with this event?flip

//stackoverflow.com/questions/1232793/javascript-set-img-src
//https://www.w3schools.com/jsref/jsref_map.asp
//https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/

///////////////////////////////////////

https: for (let i = 0; i < cardDeck.length; i++) {
  let doggo = document.createElement("img");
  randomNum = getRandomNum();
  doggo.src = `./Memory Game/${randomNum}.png`;
  let imgDoggo = document.getElementById(cardDeck[i]); //equivalent to "divA/b/c"
  imgDoggo.append(doggo);
} // can put this into a function and call it to populate images.

///// [1,1,2,2,3,3,] -- how to randomize an array
//// can use randomize array which picture goes where
//// .map functions on arrays look up

////////////////////////////////////////////// cardDeck.map(); //loop over the array and then returns the array you give it
// +1 would have new array of 2-6

//////////////////////////////// I want all cells to have the same/////////////////////////////////////////

const dogCards = [
  // `./Memory Game/1.png`,
  // `./Memory Game/2.png`,
  // `./Memory Game/3.png`,
  // `./Memory Game/4.png`,
  // `./Memory Game/5.png`,
  // `./Memory Game/6.png`,
]; // placed my dog images in this array
// let dogCards = [];

// for (let i = 1; i <= 6; i++) {
//   dogCards[i - 1] = new Image(); //makes an image in html
//   dogCards[i - 1].src = `./Memory Game/${i}.png`;
// }

for (let i = 0; i < cardDeck.length; i++) {
  let sameDog = document.createElement("img");
  sameDog.src = `./Memory Game/7.png`;
  let imgBackCard = document.getElementById(cardDeck[i]);
  imgBackCard.append(sameDog); //////this is for the backcard
}

const grid = document.getElementById("grid");
grid.addEventListener("click", (Event) => {
  const { target } = Event;
  // console.log(event.target); //tested whether console will show i clicked on image, yes!
});
/////////////////////////////

// for
// matchgird[i].createelement("img")
// matchGrid.src = dogcards()

console.log(dogCards); //images are pulling up in console with title dogCards
//try to display dogcard image in at least cell1

// let imgA = document.getElementById("divA");
// imgA.appendChild(dogCards);

// function memoryGameStart() {
//   let i = 0;
//   while (i < matchGrid.length) {
//     //how do i get the match now to pair with the images?
//     matchGrid[i];
//     i++;
//   }

//   for (let i = 0; i < matchGrid.length; i++) {}
// }

//////////////////////////////////////////////////////////////////
// click element -- tictactoe -- someway to provide the metadata to the function -- sat tictac
// doc.getElementById.somehow assign a new image -- next step after i grab the doc
//
////////////////////////////////////////////////////////////////
flipping option IdleDeadline

grid.addEventListener("click", (Event) => {
  const { target } = Event;
  // console.log(event.target); //tested whether console will show i clicked on image, yes!
  if (target.innerHTML === true) {
    let doggo = document.createElement("img");
    randomNum = getRandomNum();
    doggo.src = `./Memory Game/${randomNum}.png`;
    let imgDoggo = document.getElementById(cardDeck[0]);
    imgDoggo.append(doggo);
    rulesGame = false;
  } else {
    target.innerHTML === false;
    let sameDog = document.createElement("img");
    sameDog.src = `./Memory Game/7.png`;
    let imgBackCard = document.getElementById(cardDeck[0]);
    imgBackCard.append(sameDog); //////this is for the backcard
    rulesGame = true;
  }
});

/* how do i get it to remove the previous photo?
* how do i specify the click to one section of the grid box?
*/

///////////////////////////////////////////////////////////////// 09/04/33 @ 1:41am

const gridB = document.getElementById("divB");
let gameRules = true;
gridB.addEventListener("click", (Event) => {
  const { target } = Event;
  console.log(event.target); //tested whether console will show i clicked on image, yes!
  if (target.innerHTML === "") {
    if (gameRules === true) {
      //do i have to do embedded tru/false?
      let doggo = document.createElement("img");
      randomNum = getRandomNum();
      doggo.src = `./Memory Game/${randomNum}.png`;
      let imgDoggo = document.getElementById(cardDeck[0]);
      imgDoggo.append(doggo);
      gameRules = false; //goes back to 7png?
    } else {
      // document.getElementById("divB").style.visibility = "hidden";
      // let sameDog = document.createElement("img");
      // sameDog.src = `./Memory Game/7.png`;
      // let imgBackCard = document.getElementById(cardDeck[1]);
      // imgBackCard.append(sameDog);
      ///////////////////////////////////////////////////////////
      //////////////////////bottom sort of works/////////////////
      // for (let i = 0; i < 99; i++) {
      //   if (gameRules === false) {
      //     imgDoggo = document.getElementById(cardDeck[0]).style.display =
      //       "none";
      //   } else {
      //     imgDoggo = document.getElementById(cardDeck[0]).style.display =
      //       "inline";
      //   }
      // }
      ////////////////////Keep ^^ fiddle//////////////////////////////
      $("#divB").hide();
      gameRules = true;
    }
  }
});


$(document).ready(function () {

//https://thisinterestsme.com/hide-image-javascript/

//how to update a html class in js/// google 
// .classlist.add('myclass') 


/////////////////////////////////////////////////////////////////09/06/2022 before some help
/////////////////////////need to do on click with this event?flip

//stackoverflow.com/questions/1232793/javascript-set-img-src
//https://www.w3schools.com/jsref/jsref_map.asp
//https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/

/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// I want all cells to have the same or Randomized////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
function getRandomNum() {
  return Math.floor(Math.random() * (6 - 1)) + 1; // get number 0-6
}

const matchGrid = document.querySelectorAll(".cell");
console.log(matchGrid); // called my cells to see if they're being called -- this is a node -- need to point an index to it

let cardDeck = [
  "divA",
  "divB",
  "divC",
  "divD",
  "divE",
  "divF",
  "divG",
  "divH",
  "divI",
  "divJ",
  "divK",
  "divL",
];

// for (let i = 0; i < cardDeck.length; i++) {
//   let doggo = document.createElement("img");
//   randomNum = getRandomNum();
//   doggo.src = `./Memory Game/${randomNum}.png`;
//   let imgDoggo = document.getElementById(cardDeck[i]); //equivalent to "divA/b/c"
//   imgDoggo.append(doggo);
// } // can put this into a function and call it to populate images.

for (let i = 0; i < cardDeck.length; i++) {
  let sameDog = document.createElement("img");
  sameDog.src = `./Memory Game/7.png`;
  let imgBackCard = document.getElementById(cardDeck[i]);
  imgBackCard.append(sameDog); //////this is for the backcard
}

//https://thisinterestsme.com/hide-image-javascript/
$(document).ready(function () {
  $("#grid").on("click", function () {
    $("#divB").toggle();
  });
});

const gridB = document.getElementById("divB");
let gameRules = true;
gridB.addEventListener("click", (Event) => {
  const { target } = Event;
  console.log(event.target); //tested whether console will show i clicked on image, yes!
  if (target.innerHTML === "") {
    if (gameRules === true) {
      //do i have to do embedded tru/false?
      let doggo = document.createElement("img");
      randomNum = getRandomNum();
      doggo.src = `./Memory Game/${randomNum}.png`;
      let imgDoggo = document.getElementById(cardDeck[1]);
      imgDoggo.append(doggo);
      gameRules = false;
    } else {
      $("#divB").hide(50);

      //   gameRules = true;
      // }
      //goes back to 7png?
      // } else {
      // document.getElementById("divB").style.visibility = "hidden";
      // let sameDog = document.createElement("img");
      // sameDog.src = `./Memory Game/7.png`;
      // let imgBackCard = document.getElementById(cardDeck[1]);
      // imgBackCard.append(sameDog);
      ///////////////////////////////////////////////////////////
      //////////////////////bottom sort of works/////////////////
      // for (let i = 0; i < 99; i++) {
      //   if (gameRules === false) {
      //     imgDoggo = document.getElementById(cardDeck[0]).style.display =
      //       "none";
      //   } else {
      //     imgDoggo = document.getElementById(cardDeck[0]).style.display =
      //       "inline";
      //   }
      // }
      ////////////////////Keep ^^ fiddle//////////////////////////////
      // $("#divB").hide();
      // gameRules = true;
    }
  }
});

$(document).ready(function () {
  $("#grid").on("click", function () {
    //this grid function isn't working correctly, wont allow diff click
    $("#divA").toggle();
  });
});

const gridA = document.getElementById("divA");
gameRules = true;
gridA.addEventListener("click", (Event) => {
  const { target } = Event;
  console.log(event.target); //tested whether console will show i clicked on image, yes!
  if (target.innerHTML === "") {
    if (gameRules === true) {
      let doggo = document.createElement("img");
      randomNum = getRandomNum();
      doggo.src = `./Memory Game/${randomNum}.png`;
      let imgDoggo = document.getElementById(cardDeck[0]);
      imgDoggo.append(doggo);
      gameRules = false; //goes back to 7png?
    } else {
      $("#divA").hide(50);
      //   let sameDog = document.createElement("img");
      //   sameDog.src = `./Memory Game/7.png`;
      //   let imgBackCard = document.getElementById(cardDeck[1]);
      //   imgBackCard.append(sameDog);
      //   gameRules = true;
    }
  }
});

// const gridC = document.getElementById("divC");
// gridC.addEventListener("click", (Event) => {
//   const { target } = Event;
//   console.log(event.target); //tested whether console will show i clicked on image, yes!
//   if (target.innerHTML === "") {
//     if (gameRules === true) {
//       let doggo = document.createElement("img");
//       randomNum = getRandomNum();
//       doggo.src = `./Memory Game/${randomNum}.png`;
//       let imgDoggo = document.getElementById(cardDeck[2]);
//       imgDoggo.append(doggo);
//       // gameRules = false; //goes back to 7png?
//       // } else {
//       //   let sameDog = document.createElement("img");
//       //   sameDog.src = `./Memory Game/7.png`;
//       //   let imgBackCard = document.getElementById(cardDeck[2]);
//       //   imgBackCard.append(sameDog);
//       //   gameRules = true;
//     }
//   }
// });
/////////////////////////////////////////////////////////////////////////////////////////////////
//////////// I the data to each of the squares so if they match then i'm gucci////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * keeps track of the matched pairs
 * how to track each box to make sure they match
 *
 */

// const gameState = [
//   null,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null,
//   null,
///////////////////////////////////////////////09/06/22 after help
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

function getRandomNum() {
  return Math.floor(Math.random() * (6 - 1)) + 1; // get number 0-6
}

const matchGrid = document.querySelectorAll(".cell");
console.log(matchGrid); // called my cells to see if they're being called -- this is a node -- need to point an index to it

let cardDeck = [
  "divA",
  "divB",
  "divC",
  "divD",
  "divE",
  "divF",
  "divG",
  "divH",
  "divI",
  "divJ",
  "divK",
  "divL",
];

// for (let i = 0; i < cardDeck.length; i++) {
//   let doggo = document.createElement("img");
//   randomNum = getRandomNum();
//   doggo.src = `./Memory Game/${randomNum}.png`;
//   let imgDoggo = document.getElementById(cardDeck[i]); //equivalent to "divA/b/c"
//   imgDoggo.append(doggo);
// } // can put this into a function and call it to populate images.

for (let i = 0; i < cardDeck.length; i++) {
  let sameDog = document.createElement("img");
  sameDog.src = `./Memory Game/7.png`;
  sameDog.id = "dog" + `${i}`;
  sameDog.class = 0;
  let imgBackCard = document.getElementById(cardDeck[i]);
  imgBackCard.append(sameDog); //////this is for the backcard
}

let 1 = src/ `./Memory Game/$1.png`;

// let arrayofoptions = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
// some way to randmize array
let gobalflip = false;
let grid = document.getElementById("grid");
grid.addEventListener("click", (Event) => {
  let isFliped = document.getElementById(Event.path[0].id);

  console.log(gobalflip);
  if (gobalflip == false) {
    console.log(Event.path[1].childNodes[0].id, Event);
    randomNum = getRandomNum();
    let imgTagToBeUpdated = document.getElementById(Event.path[0].id);
    // imgTagToBeUpdated.src = `./Memory Game/${arrayofoptions}.png`;
    //remove option from the array
    imgTagToBeUpdated.src = `./Memory Game/${randomNum}.png`;
    gobalflip = true;
    isFliped.className = 1;
  } else if ((gobalflip = true)) {
    console.log(gobalflip);
    randomNum = getRandomNum();
    let imgTagToBeUpdated = document.getElementById(Event.path[0].id);
    imgTagToBeUpdated.src = "./Memory Game/7.png";
    gobalflip = false;
    isFliped.className = 0;
  }
});

/