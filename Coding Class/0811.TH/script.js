// // api how to interact with a program//////////
// // rest api how you interact with the server or take actions generally

// // having multiple .then.then.catch.etc... is called chaining methods. Don't break the chain even if they are on different lines. Only put ; at the very end of all methods
// fetch("https://swapi.dev/api/people") // this is using the /people endpoint. What do you think we'll get back?
//   .then((res) => res.json()) // res is going to be a sort of blob of information which is hard to use. so we turn it to JSON with res.json()
//   .then((peopleData) => {
//     console.log(peopleData); // if data is a big JSON object/object then we could use a property to get to the info we want
//     console.log(peopleData.results); // the array of people is inside of the results property

//     // how could I loop over the results in the data?
//     // how could I get to the array with the names of the people?
//     // could use a for loop

//     // array.name is this possible?
//     // how do we access info in an array
//     // array[index] the index is a numerical value
//     peopleData.results.map((person) => {
//       // here we're going to render the info
//       console.log(person.name); // what would we see?

//       // how did I render information onto a screen?
//       // how could I render it to my HTML?
//       // we're going to have to write into innerHTML
//       const list = document.getElementById("people"); // this is going to be the UL inside of the HTML

//       const listItem = document.createElement("li");

//       listItem.innerHTML = `
//         <h4>${person.name}</h4>
//         <h5>${person.birth_year}</h5>
//       `;

//       list.appendChild(listItem);
//     }); // I'm using .map because since it makes a new array it will preserve the integrity of the original array
//   }) // data is actually the JSON information. Very easy to use. Is literally like a javascript object (with some special rules)
//   .catch((e) => console.error(e.message)); // just in case it throws an error it'll tell you what the error is

fetch("https://swapi.dev/api/films/")
  .then((res) => res.json())
  .then((filmData) => {
    console.log(filmData);
    console.log(filmData.results);
    filmData.results.map((title) => {
      console.log(title.name);
      const filmList = document.getElementById("films");
      const listItem = document.createElement("li");
      listItem.innerHTML = `
      <div><h1>${title.episode_id}</h1></div>`;
      filmList.appendChild(listItem);
    });
  });

fetch("https://swapi.dev/api/starships/")
  .then((res) => res.json())
  .then((starshipsData) => {
    console.log(starshipsData);
    console.log(starshipsData.results);
    starshipsData.results.map((title) => {
      console.log(title.name);
      const starshipsList = document.getElementById("starships");
      const listItem = document.createElement("li");
      listItem.innerHTML = `
    <li><h2>${title.model}</h2></li>`;
      starshipsList.appendChild(listItem);
    });
  });

fetch("https://swapi.dev/api/planets/")
  .then((res) => res.json())
  .then((planetData) => {
    console.log(planetData);
    console.log(planetData.results);
    planetData.results.map((planets) => {
      //creating a function
      console.log(planets.name);
      const list = document.getElementById("planets");
      const listItem = document.createElement("li");
      //html populates to the bullet points
      listItem.innerHTML = `
    <h4>${planets.name}</h4>
    <h5>${planets.population}</h5>`;
      //document.body.style.backgroundColor = "blue";
      list.appendChild(listItem);
    });
  })
  .catch((e) => console.error(e.message));

fetch("https://swapi.dev/api/planets/")
  .then((res) => res.json())
  .then((planetData) => {
    console.log(planetData);
    console.log(planetData.results);
    planetData.results.map((planets) => {
      //creating a function
      console.log(planets, "note"); //this was done to check console
      console.log(planets.name);
      const list = document.getElementById("planets");
      const listItem = document.createElement("li");
      //html populates to the bullet points
      listItem.innerHTML = `
  <h4>${planets.name}</h4>
  <h5>${planets.population}</h5>`;
      listItem.style.color = "blue";
      list.appendChild(listItem);
    });
  })
  .catch((e) => console.error(e.message)); //catch errors

////////////
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
