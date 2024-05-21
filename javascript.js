//Initial scores of user and computer
let humanScore = 0;
let computerScore = 0;

//Computer makes a random choice between rock, paper, scissors
let computerChoice = ("rock", "paper", "scissors");

function getComputerChoice() {
    
    let randomizeChoice = Math.floor(Math.random() * 3);

    if (randomizeChoice === 0) {
        return "rock";

    } if (randomizeChoice === 1) {
        return "paper";

    } if (randomizeChoice === 2) {
        return "scissors";
    }
}

//Computer returns choice
console.log(getComputerChoice());

//User inputs valid choice
let humanInput = window.prompt("What is your Choice: rock, paper or scissors?");

function getHumanChoice() {

    if (humanInput === "rock") {
        return "rock";

    } if (humanInput === "paper") {
        return "paper";

    } if (humanInput === "scissors") {
        return "scissors";

    } else {
        return "That is not a valid choice!";
    }
    
}

//Computer returns valid choice
console.log(getHumanChoice());


