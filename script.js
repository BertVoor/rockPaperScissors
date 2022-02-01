// computerPlay randomly returns "Rock", "Paper" or "Scissors"
    
function computerPlay() {

    // random number 0-1-2
    function getComputerInt(){
        return Math.floor(Math.random() * 3);
    }
    const computerInt = getComputerInt();
    
    // convert number to string "Rock"-"Paper"-"Scissors"
    if (computerInt == 0){
        return "Rock";
    }
    else if (computerInt == 1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
let computerSelection;
let playerSelection;

// play a single round and return a string that declares the winner of the round
function playRound(playerSelection, computerSelection){

    playerSelection = prompt("Rock, Paper or Scissors?");
    computerSelection = computerPlay();

    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return "It's a TIE, try again...";
    }
    else if (playerSelection.toLowerCase() == "rock"){
        if (computerSelection == "Scissors"){
            return "Rock beats Scissors, You WIN!";
        }
        else if (computerSelection == "Paper"){
            return "Paper beats Rock, You LOSE!";
        }
    }
    else if (playerSelection.toLowerCase() == "paper"){
        if (computerSelection == "Scissors"){
            return "Scissors beats Paper, You LOSE!";
        }
        else if (computerSelection == "Rock"){
            return "Paper beats Rock, You WIN!";
        }
    }
    else if (playerSelection.toLowerCase() == "scissors"){
        if (computerSelection == "Rock"){
            return "Rock beats Scissors, You LOSE!";
        }
        else if (computerSelection == "Paper"){
            return "Scissors beats Paper, You WIN!";
        }
    }
    else {
        return "Something went wrong, try again.";
    }
}

// function game() that plays 5 rounds, keeps score and reports a winner at the end

let userScore = 0;
let computerScore = 0;
let roundNumber = 0;

function game() {
    
    console.log(playRound());

    console.log(playRound());
    
    console.log(playRound());

    console.log(playRound());

    console.log(playRound());
}