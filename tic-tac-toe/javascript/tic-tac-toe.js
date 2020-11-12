function hideTwoPlayersItems(){
    var hideTwoPlayersItems = document.querySelector(".two-players-items");
    hideTwoPlayersItems.style.display = "none";

    var displaySinglePlayerCat = document.querySelector(".single-player-characters");
    displaySinglePlayerCat.style.display = "block";
}

function hideSinglePlayerItems(){
    var hideSinglePlayerItems = document.querySelector(".single-player-items");
    hideSinglePlayerItems.style.display = "none";

    var displayTwoPlayersCat = document.querySelector(".two-players-characters");
    displayTwoPlayersCat.style.display = "block";
}