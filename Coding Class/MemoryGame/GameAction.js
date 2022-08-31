const base_url = "https://api.pexels.com/v1/search";
/*
fetch("");

function memoryApp() {
  fetch(base_url, {
    method: "GET",
    withCredentials: true,
    headers: {
        authoization: ProcessingInstruction.env.REACT_APP_AUTH_KEY,;
    },
  });
}
*/

function getRndInteger() {
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

//cellA.src = './Memory Game/7.png'

let imgA = document.getElementById("divA");
imgA.appendChild(cellA);

let imgB = document.getElementById("divB");
imgA.appendChild(cellB);
//imgA.src = `./Memory Game/${ranNumA}.png`;

//let imgB = document.getElementById("B");
//imgB.src = `./Memory Game/${ranNumB}.png`;
