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
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
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
getWinner();

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;

    while (playerWins<=5 || computerWins<=5){
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);
        if (winner === "player"){
            playerWins +=1;
        }
        else if (winner === "computer"){
            computerWins +=1;
        }
        else{
            computerWins += 0;
            playerWins+= 0;
        }
        console.log('Player chose ' + playerMove + " while Computer chose " + computerMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}

playToFive();
