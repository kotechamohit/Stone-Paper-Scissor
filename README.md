

# Rock Paper Scissors Game

This repository contains a simple "Rock Paper Scissors" game implemented in vanilla JavaScript. The game allows a user to compete against a computer by selecting one of the three choices: Rock, Paper, or Scissors. The computer randomly selects a choice, and the outcome of each round is displayed with corresponding scores.

## How It Works

1. **User and Computer Choices**: 
   - The user selects either Rock, Paper, or Scissors by clicking one of the buttons.
   - The computer generates a random choice from the same options.

2. **Game Logic**: 
   - The game checks for a winner based on the traditional Rock-Paper-Scissors rules:
     - Rock beats Scissors
     - Scissors beats Paper
     - Paper beats Rock
   - If both choices are the same, the round is a draw.

3. **Scorekeeping**:
   - The user and computer scores are updated after each round.
   - A message is displayed to indicate whether the user won, lost, or tied, with a corresponding background color.

## Features

- **Random Computer Choice**: The computer generates a random choice using the `genCompChoice()` function.
- **User Interaction**: The user interacts with the game by clicking buttons representing the available choices.
- **Dynamic Updates**: 
  - Scores and messages are updated dynamically on the webpage after each round.
  - Feedback messages are color-coded (green for a win, red for a loss, blue for a draw).

## How to Play

1. Click on "Rock", "Paper", or "Scissors" to make your choice.
2. The computer will automatically make its choice.
3. The result will be displayed on the screen, and the scores will update.

## Code Overview

- **`genCompChoice()`**: Generates the computer's random choice.
- **`playGame(userChoice)`**: Handles the game logic by comparing the user and computer choices.
- **`showWinner(userWin, userChoice, compChoice)`**: Updates the UI with the result of the round.
- **`drawGame()`**: Displays a message when both choices are the same.
- **Event Listeners**: Each choice button has a click event listener to trigger the game.


