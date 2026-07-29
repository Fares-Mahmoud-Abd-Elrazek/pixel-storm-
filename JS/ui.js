function displayGames(games) {
    let cartona = "";
    for (let i = 0; i < games.length; i++) {
        cartona += ` <div class="col-md-3 col-sm-6 mb-4 d-flex">
                    <div class="card game-card h-100 w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-id="${games[i].id}">
                        <div class="cardImg">
                            <img src="${games[i].thumbnail}" class="card-img-top w-100" alt="${games[i].title}">
                        </div>
                        <div class="card-body">
                            <div class="cardHeader">
                                <h5 class="card-title">${games[i].title}</h5>
                                <p class="price">Free</p>
                            </div>
                            <p class="card-text text-secondary">${games[i].short_description.substring(0,80)}</p>
                            <div class="gameDesc">
                                <p class="gameType" id="gameType">${games[i].genre}</p>
                                <p class="platformGame">PC (Windows)</p>
                            </div>
                        </div>
                    </div>
                </div>`
    }
    $("#gamesRow").html(cartona);

    $(".game-card").click(function() {

        let gameId = $(this).data("id");


        getGamesDetails(gameId);

        $("#exampleModalLabel").text(games.title);

        $("#modalBody").html(`
        <img src="${games.thumbnail}" class="w-100 mb-3">

        <p>${games.short_description}</p>

        <p><strong>Genre:</strong> ${games.genre}</p>

        <p><strong>Platform:</strong> ${games.platform}</p>

        <button class="playBtn">Play Now</button>
    `);

    });



}