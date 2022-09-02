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
