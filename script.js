const max = 3;
let computerInt = getRandomInt(max);
const playerSelection = "rock";
const computerSelection = computerPlay();

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
function computerPlay(){
    if (computerInt == 0) {
        return "Rock";      
    } 
    else if (computerInt == 1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock" && computerSelection == "Scissors"){
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection == "rock" && computerSelection == "Paper"){
        return "You Lose! Paper beats Rock";
    }
    else if (playerSelection == "rock" && computerSelection == "Rock"){
        return "It is a Tie! Try again";
    }
    else {
        return "the end";
    }
}

