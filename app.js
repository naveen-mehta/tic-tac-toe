var activePlayer = "Player 1";
var grid = document.querySelectorAll('.box');
var player1clicks = [];
var player2clicks = [];
var allClicks = []; //tracks clicks for both players 
var matchTracker = [];
var winCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function handleClick(event) {
    var boxNum = event.target.dataset.id;
    if (activePlayer == "Player 1") {
        event.target.textContent = "X";
        allClicks.push(boxNum); 
        player1clicks.push(boxNum);
        checkWinner(player1clicks);
        switchActivePlayer("Player 2");
    } else {
        event.target.textContent = "O";
        allClicks.push(boxNum);
        player2clicks.push(boxNum);
        checkWinner(player2clicks);
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

function checkWinner(playerClicks) {
    for (var i = 0; i < winCombinations.length; i++) {
        for (var j = 0; j < 3; j++) {
            if (playerClicks.includes(winCombinations[i][j])) {
                matchTracker.push(winCombinations[i][j]);
            }    
        } 
        if (matchTracker.length === 3) {
            return matchTracker;
        } else {
            matchTracker = [];
        }
    }
    return matchTracker;
}

