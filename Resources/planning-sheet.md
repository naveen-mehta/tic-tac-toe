variables - 
1. active player
2. 

- active player variable: set to player 1 as default 

** handleClick function **

- if player 1 selected {
    - show X
    - update player 1 choice / box clicked
    - checkWinner function (); 
    - switch active player to player 2 
  } else {
    - show O
    - update player 2 choice / box clicked
    - checkWinner function ();
    - switch active player to player 1
  }
  
** checkWinner function **

winning combinations  
- 123
- 456
- 789
- 147
- 258
- 369
- 159
- 357

- Check player array against win combinations
- Update match array to declare winner 
- Add logic to not allow clicking on the same box
- Add draw logic 
- Add reset button logic 
- Add player button highlights for active player

** handleWin ** 

- hide player-container and gameboard 
- display window with message "Player 1/2 wins. Restarting..." with timeout of 3 seconds
- reset game: 
  - clear board
  - set variables to empty
    - playerOneClicks
    - playerTwoClicks
    - allClicks 
    - matchTracker  
- set activePlayer to Player1


** handleReset ** -> this can be called on page load and can be called within the
handleWin function. 

** draw function ** 
- called in the else block of handleClick

- prevent double click on the same box. use allClicks array to check if the box is clicked. 

- add logic for reset button
  
** handleDoubleClick**

- call first at every click
- return if box is empty
- call handleHide if not and pass on false as parameter
- 
- Modify handleHide 
  - if doubleClick argument is true    

** handleWinComboBgColor **

- add a class to switch background color for the winning combo
- call this function from within the handleWin function before hiding elements and declaring the winner 

- Logic (*)
  - loop through the playerClicks array 
//box[playerOneClicks[i]-1].classList.add('highlight-winners');
the -1 is to make sure the index starts from zero. 



