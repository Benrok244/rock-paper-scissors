//Computer makes a random choice between rock, paper, scissors
let ComputerChoice = ("rock", "paper", "scissors");

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

// //Computer returns choice
console.log(getComputerChoice());

//User inputs valid choice
let HumanChoice = window.prompt("What is your Choice: rock, paper or scissors?");

function getHumanChoice() {

    if (HumanChoice === "rock") {
        return "rock";

    } if (HumanChoice === "paper") {
        return "paper";

    } if (HumanChoice === "scissors") {
        return "scissors";

    } else {
        return "That is not a valid choice!";
    }
    
}

//Computer returns valid choice
console.log(getHumanChoice());