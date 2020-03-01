// QUESTION: 1
(a, b) => a - b;


// QUESTION: 2
const apiRawgUrl = "https://api.rawg.io/api/";
const gamesUrl = `${apiRawgUrl}games`;

fetch(gamesUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    logGames(json);
  })
  .catch(function(error) {
    console.dir(error);
  });



function logGames(json) {
  const games = json.results;

  const log = document.querySelector(".results");


  for (let i = 0; i < games.length; i++) {
    let name = games[i].name;

    console.log(name);
  }
}

// QUESTION: 3
catsToGiraffs = "These cats are outrageus.";
const formatString = catsToGiraffs.replace("cats", "giraffs");

formatString;

// QUESTION: 4
//Could not get this to work!!!

// QUESTION: 5
const container = document.querySelector(".container");
const button = document.querySelector(".btn");

container.removeChild(button);

// QUESTION: 6
const animals = document.querySelector(".animals");
const elephantsBefore = document.querySelector(".elephants");

console.log(animals);
console.log(elephantsBefore);

const newLi = document.createElement("li");
newLi.className = "parrots";
newLiContent = document.createTextNode("Parrots");
newLi.appendChild(newLiContent);

animals.insertBefore(newLi, elephantsBefore);

// QUESTION: 7
fetch("https://api.rawg.io/api/games/3801")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    getRating(json);
})
.catch(function(error) {
    console.dir(error);
});


function getRating() {
  const rating = document.querySelector(".rating");
  rating.innerText = returnJson;
};

//could not get result into div.rating!!!
