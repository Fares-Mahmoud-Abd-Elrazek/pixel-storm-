let allGames = [];

function getGames() {
    $("#loading").fadeIn(200);

    $.ajax({

        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",

        method: "GET",

        headers: {

            "x-rapidapi-key": "69697d49c1msh025c7aa3b176fcep1e0c53jsne8616b2e7d66",

            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"

        }

    })

    .done(function(response) {

        allGames = response;
        $("#loading").fadeIn(200);

        displayGames(allGames);
        $("#loading").fadeOut(200);

    })

    .fail(function(error) {
        $("#loading").fadeOut(200);
        console.log(error);

    });

}



function getGamesByCategory(category) {
    $("#loading").fadeIn(200);
    $.ajax({

        url: `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,


        method: "GET",

        headers: {

            "x-rapidapi-key": "69697d49c1msh025c7aa3b176fcep1e0c53jsne8616b2e7d66",

            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"

        }

    })

    .done(function(response) {

        displayGames(response);
        $("#loading").fadeOut(200);

    })

    .fail(function(error) {
        $("#loading").fadeOut(200);
        console.log(error);

    });

}