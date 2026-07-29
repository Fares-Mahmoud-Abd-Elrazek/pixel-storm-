let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function() {

        navLinks.forEach(link => {
            link.classList.remove("active");
        });

        this.classList.add("active");
    });
});

$(document).ready(function() {

    getGames();

});

function displayGameDetails(game) {

    $("#exampleModalLabel").text(game.title);

    $("#modalBody").html(`
        <img src="${game.thumbnail}" class="w-100 mb-3">

        <p>${game.description}</p>

        <p><strong>Genre:</strong> ${game.genre}</p>

        <p><strong>Platform:</strong> ${game.platform}</p>

        <p><strong>Publisher:</strong> ${game.publisher}</p>

        <a href="${game.game_url}" target="_blank" class="playBtn">
            Play Now
        </a>
    `);

}

$(document).on("click", ".dropdown-item", function() {

    let category = $(this).data("category");

    getGamesByCategory(category);

    $("html, body").animate({

        scrollTop: $("#games").offset().top - 70

    }, 600);

});


const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = Number(counter.dataset.target);
    const isDecimal = target % 1 !== 0;

    let current = 0;

    const updateCounter = () => {
        const increment = target / 100;

        if (current < target) {
            current += increment;

            if (isDecimal) {
                counter.innerText = current.toFixed(1);

            } else {
                counter.innerText = Math.ceil(current).toLocaleString();
            }

            requestAnimationFrame(updateCounter);
        } else {
            if (isDecimal) { counter.innerText = target.toFixed(1) + "★"; } else { counter.innerText = target.toLocaleString() + "+"; }
        }
    };
    updateCounter();
});