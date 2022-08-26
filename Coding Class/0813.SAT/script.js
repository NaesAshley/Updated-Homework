// fetch('http://hp-api.herokuapp.com/api/characters')
// .then((res) => res.json())
// .then(data) => { // data is just an array of objects. each obj represents  a character
//   // console.log(characterData);
//   // console.log(characterData.results);
//   data.map(character => { //can do characterData.maps not results.map because its a straight array [] and not object {}
//     console.log(character.name);
//     const ul = document.getElementById("name");
//     const li = document.createElemect('li');
//     li.innerHTML = `
//     <div class ="character">
//     <h2>${character.name} | ${character.gender} | ${character.species}<h2>
//     <p>house: ${character.house}</p>
//     </div>
//     `;
//     ul.appendchild(li);
//   }
// }
// .catch((e) => console.error(e.message));

// something is wrong with this ^^

fetch("http://hp-api.herokuapp.com/api/characters")
  .then((res) => res.json())
  .then((data) => {
    // data is just an array of objects. Each object represent a character
    // now since we have our array of information. We use .map in order to loop over it
    data.map((character) => {
      // const array = []; // could be a list
      console.log(character.name);
      const ul = document.getElementById("names");
      const li = document.createElement("li");
      li.innerHTML = `
        <div class="character">
          <h3>${character.name} | ${character.gender} | ${character.species}</h3>
          <p>House: ${character.house}</p>
        </div>
      `;
      ul.appendChild(li);
    });
  })
  .catch((e) => console.error(e.message));

///////////////////////

// fetch("https://api.jokes.one/jod/categories");

// const button = document.querySelector(".container button");

// button.addEventListener("click", jokeNow);

///////////////////////////

const button = document.querySelector(".container button");
const jokeText = document.querySelector(".container p");
document.addEventListener("DOMContentLoaded", getJoke); //this brings in the joke when you immediately load the content

button.addEventListener("click", getJoke);
async function getJoke() {
  //An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based
  //behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    //wait for the fetch then goes to jokedata
    headers: {
      Accept: "application/json",
    },
  });
  const jokeObj = await jokeData.json();
  console.log(jokeObj.joke);
  jokeText.innerHTML = jokeObj.joke;
}

const base_url = "https://api.jokes.one";

button.addEventListener("click", () => {
  fetch(base_url + "/jod")
    .then((res) => res.json())
    .then((data) => {
      const joke = data.contents.jokes[0].joke;
      console.log(joke);
      const display = document.getElementById("joke");
      display.innerHTML = joke.text;
    })
    .catch((e) => console.error(e.message));
});

/////////

// const jokeContainer2 = document.getElementById("daily2");
// const button2 = document.getElementById("button2");
// const URL =
//   "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

// let getJoke2 = () => {
//   fetch(url)
//     .then((data) => data.json())
//     .then((item) => consolelog(item));
// };
// getJoke2();

/////////////////// joseph help/////////////////

// fetch("https://api.jokes.one/jod")
// .then(res => res.json()
// .then(jokeData) => {
//   console.log(jokeData);
//   const jokeOfDay = jokeData.contents.jokes[0].joke.text;
//   console.log(jokeOfDay);
// })

// fetch("https://api.jokes.one/jod/")
// .then(res) => res.json()
// .then(jokeData => {
//   console.log(jokeData);
//   const jodButton = document.getElementById('button2');

// });

//////////////// angel help //////////////////
/* when you click a button display a joke

when you click a button 
- make an API request w/ fetch
- render the API request information to a page 