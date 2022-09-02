function getRandomNum() {
  return Math.floor(Math.random() * (6 - 1)) + 1; // get number 0-6
}
randomNumA = getRandomNum(); //if you don't do this they will all be the sameeeee one
randomNumB = getRandomNum();
randomNumC = getRandomNum();
randomNumD = getRandomNum();
randomNumE = getRandomNum();
randomNumF = getRandomNum();
randomNumG = getRandomNum();
randomNumH = getRandomNum();
randomNumI = getRandomNum();
randomNumJ = getRandomNum();

//////////////////////// I want all cells to have the same/////////////////
const matchGrid = document.querySelectorAll(".cell");
console.log(matchGrid); // called my cells to see if they're being called -- this is a node -- need to point an index to it

/////////////////////////////////////these images will be onclick images///////////////////////////
let cellA = document.createElement("img");
cellA.src = `./Memory Game/${randomNumA}.png`;

let imgA = document.getElementById("divA");
imgA.append(cellA);

let cellB = document.createElement("img");
cellB.src = `./Memory Game/${randomNumB}.png`;

let imgB = document.getElementById("divB");
imgB.append(cellB);

let cellC = document.createElement("img");
cellC.src = `./Memory Game/${randomNumC}.png`;

let imgC = document.getElementById("divC");
imgC.append(cellC);

let cellJ = document.createElement("img");
cellJ.src = `./Memory Game/${randomNumJ}.png`;

let imgJ = document.getElementById("divI");
imgJ.append(cellJ);

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

console.log(dogCards); //images are pulling up in console with title dogCards
//try to display dogcard image in at least cell1

// let imgA = document.getElementById("divA");
// imgA.appendChild(dogCards);

function memoryGameStart() {
  let i = 0;
  while (i < matchGrid.length) {
    //how do i get the match now to pair with the images?
    matchGrid[i];
    i++;
  }

  for (let i = 0; i < matchGrid.length; i++) {}
}

///////////////////////////////button for timer count down start!///////////////////////////////////
//found in memoryGT.js
