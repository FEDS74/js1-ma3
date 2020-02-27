
const apiRawgUrl = "https://api.rawg.io/api/";
const gamesUrl = `${apiRawgUrl}games`;

fetch(gamesUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        loadgames(json);
    })
    .catch(function(error) {
        console.dir(error);
    });


    const catsToGiraffs = "These cats are outrageous.";
    const format = catsToGiraffs.replace("cats", "giraffs");
