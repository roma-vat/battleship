# The battleship game
Play game: https://roma-vat.github.io/battleship/

## Overview

In Battleship, the computer has positioned ships of various sizes on a 10x10 board.
Each ship must be placed horizontally or vertically, completely on the board, without overlapping another ship.
The player cannot see the ship locations.
Each round, the player "fires" at a board position of his choosing.
The computer indicates if this was a "hit" or a "miss".
When all tiles of a particular ship have been hit, the computer indicates that the entire ship has been sunk.
When the player has sunk all of the ships, the game is over.

## Running locally

1. Clone this repository
2. In console type ```npm install```
3. In console type ```npm start```

## Techniques

Written using JS, React, Redux, HTML, CSS

# Gameplay
## Game

Game is implemented for one player, i.e. has computer has positioned ships while user should hit them.

## Restart

After finish, user can restart the game.

## Score

User gets as many scores as he made clicks to sunk all the ships.
Less score == better result.
