////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
use strict;

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var playerMove = move || getInput();
    return playerMove;
}

function getComputerMove(move) {
    var computerMove = move || randomPlay();
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;

       var winner;
if (PlayerMove === ComputerMove) {
   winner = "Tie";
}
else if (PlayerMove === "Rock") {
       if (ComputerMove === "Scissor") {
           winner = "Player";
       }
       else if (ComputerMove === "Paper") {
           winner ="Computer";
       }
}
else if (PlayerMove === "Scissor") {
       if (ComputerMove === "Rock") {
           winner = "Computer";
       }
       else if (ComputerMove === "Paper") {
           winner ="Player";
       }
}
else (PlayerMove === "Paper") {
       if (ComputerMove === "Rock") {
           winner = "Player";
       }
       else if (ComputerMove === "Scissor") {
           winner ="Computer";
       }
}
   return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

