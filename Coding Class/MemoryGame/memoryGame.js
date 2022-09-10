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
  sameDog.id = "dog" + `${i}`;
  sameDog.class = 0;
  let imgBackCard = document.getElementById(cardDeck[i]);
  imgBackCard.append(sameDog); //////this is for the backcard
}

// let arrayofoptions = [
//   "./Memory Game/1.png",
//   "./Memory Game/1.png",
//   "./Memory Game/2.png",
//   "./Memory Game/2.png",
//   "./Memory Game/3.png",
//   "./Memory Game/3.png",
//   "./Memory Game/4.png",
//   "./Memory Game/4.png",
//   "./Memory Game/5.png",
//   "./Memory Game/5.png",
//   "./Memory Game/6.png",
//   "./Memory Game/6.png",
// ];

let arrayofoptions = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

let gameState = {};

//implement fisher-yates algorithm
const shuffleArray = (arrayofoptions) => {
  for (let i = arrayofoptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arrayofoptions[i];
    arrayofoptions[i] = arrayofoptions[j];
    arrayofoptions[j] = temp;
  }
  return arrayofoptions;
};

// shuffleArray(arrayofoptions);
// console.log(arrayofoptions); // now this randomizes the listed array

let arrayofoptionsRandomized = shuffleArray(arrayofoptions); //////set it to be names arrayof""randomized"
console.log(arrayofoptionsRandomized);
/* now that the shuffle array is working and randomizing the photo numbers, i want the image source to pull from this array
 * and once pulled. it removes it from the array
 */

// arrayofoptionsRandomized.forEach();

/////then after randomizing array, how do you pair it to the source? with a randomization function

/// after pairing it to the source, replace line 70 imgTagToBeUpdated.src = `./Memory Game/${randomNum}.png`;

let gobalflip = false; // see a way if there are two flipped cards -- probably create a separate function outside of the entire if block below // replace with a function to check cards
///////// come up with logic for checking cards if two cards are flipped function
////////// how to access info in html tags so 2 can only be flipped at a time
/////////that function will only return true or false

let grid = document.getElementById("grid");
grid.addEventListener("click", (Event) => {
  let isFliped = document.getElementById(Event.path[0].id);
  console.log(isFliped.class);
  if (isFliped.class == 0) {
    /********** this will be replaced by a true or false by a different function -- in 95 */
    let holdImg = arrayofoptionsRandomized[0]; //creating something to Hold my randomized # of my array

    console.log(Event.path[1].childNodes[0].id, Event);
    // need some way to remember associated images with the cell
    randomNum = getRandomNum();
    let imgTagToBeUpdated = document.getElementById(Event.path[0].id);
    // a way to check which one is assigned to which divcell

    console.log(imgTagToBeUpdated);

    let imgTagID = imgTagToBeUpdated.id; //this is dog1,dog2,dog3,dog4 etc. ID

    if (gameState[`${imgTagID}`] !== undefined) {
      ///////////we want this to check if something already is there and assigned
      ////google if "key" exists in an object
      let pastImg = gameState[`${imgTagID}`]; //access gamestate knowledge to find old image
      console.log("imgTagAlreadyExist");
      console.log(gameState[`${imgTagID}`]); // now need it to show image source again
      imgTagToBeUpdated.src = gameState[`${imgTagID}`];
    } else {
      console.log("imgTagDoesntExist"); // this check whether it's been clicked
      arrayofoptionsRandomized.shift(); // need to create a way for it to be removed
      imgTagToBeUpdated.src = `./Memory Game/${holdImg}.png`; //this calls my holdimg source
    }

    ///////ground 0 check before remembering as we're plaing?

    if (
      // this rememebers as we're playing
      imgTagToBeUpdated.src.includes("1") ||
      imgTagToBeUpdated.src.includes("2") ||
      imgTagToBeUpdated.src.includes("3") || //we want all image info saved somehow
      imgTagToBeUpdated.src.includes("4") ||
      imgTagToBeUpdated.src.includes("5") ||
      imgTagToBeUpdated.src.includes("6")
    ) {
      //when this string matches one of these, we want to make an object with info on tag & id
      // let positionInfo = {}; //creating an obj. think of it as a "class" -- so we can store info
      gameState[imgTagID] = imgTagToBeUpdated.src; //called positioninfo['this is the key'] = 'what is the key value assigned'
      // console.log(positionInfo); // think of a key as an index of the array
      console.log(gameState); ////// gamestate remembers what i clicked, but i want it to remember & keep the same info
      //check number 1-6 to be true or false
      //create an object that stores the ID of the img and the source of the image //how to create an object look for options
      // take it and then push it to gamestate array
    }

    gobalflip = true;
    isFliped.class = 1;
  } else {
    //////////////***************new function */
    console.log(gobalflip);
    randomNum = getRandomNum();
    let imgTagToBeUpdated = document.getElementById(Event.path[0].id);
    imgTagToBeUpdated.src = "./Memory Game/7.png";
    gobalflip = false;
    isFliped.class = 0;
  }
});
