var activePlayer = "Player 1"
var grid = document.querySelectorAll('.box')
var player1selection = [];

function handleClick(event) {
    if (activePlayer == "Player 1") {
        event.target.textContent = "X";
        switchActivePlayer("Player 2");
    } else {
        event.target.textContent = "O";
        switchActivePlayer("Player 1");
    }
}

function switchActivePlayer(playerName) {
    activePlayer = playerName;
}

//event listener to handle user clicks
for (var i = 0; i < 9; i++) {
    grid[i].addEventListener('click', handleClick);
}

