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
