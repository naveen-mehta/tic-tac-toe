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

- check player array against win combinations
- update match array to declare winner 

- Add logic to not allow clicking on the same box
- Add draw logic 





