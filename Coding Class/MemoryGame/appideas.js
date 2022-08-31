/* can i do based on click to go to the backpage image? https://www.youtube.com/watch?v=IMz_68rfhXA&list=PLLX1I3KXZ-YH-woTgiCfONMya39-Ty8qw&index=6*/
const cards = document.querySelectorAll(".Memory-card");

///////////works but its okay/////////
cards.forEach((card) => {
  card.addEventListener("click", function randomPic(event) {
    let randomNum = math.floor(Math.random() * dogImg.length);
    document.getElementById("frontcard").src = dogImg[randomNum];
  });
});

const dogImg = new Array(
  "https://i.ibb.co/YQFtCLH/1.png",
  "https://i.ibb.co/XFP3rg4/2.png"
);

function randomPic() {
  let randomNum = math.floor(Math.random() * dogImg.length);
  document.getElementById("frontcard").src = dogImg[randomNum];
}

https://api.pexels.com/v1/


// const cards = document.getElementById("Memory-card");
// cards.addEventListener("click", function () {});


///////how to tackle this???///////////
/* 
- when clicking on a memmory i need it to flip back and forth
- when populating the "front images need to be randomized per game"
- per game, be able to 