//Initial scores of user and computer
let humanScore = 0;
let computerScore = 0;

//Computer makes a random choice between rock, paper, scissors

function getComputerChoice() {
    
    let randomizeChoice = Math.floor(Math.random() * 3);

    if (randomizeChoice === 0) {
        return "rock";

    } else if (randomizeChoice === 1) {
        return "paper";

    } else if (randomizeChoice === 2) {
        return "scissors";
    }
}

//User inputs valid choice
let humanInput = prompt("What is your Choice: rock, paper or scissors?");

function getHumanChoice() {

    if (humanInput === "rock") {
        return "rock";

    } else if (humanInput === "paper") {
        return "paper";

    } else if (humanInput === "scissors") {
        return "scissors";

    } else {
        return "That is not a valid choice!";
    }
    
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

//Console returns human choice
 console.log("You choose", humanChoice);

//Console returns computer choice
 console.log("Computer chooses", computerChoice);




playRound();

function playRound() {
    
    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            console.log("You win!");
            console.log("You: ", ++humanScore, "Computer: ", computerScore);

    } else if ((humanChoice === "rock" && computerChoice === "paper") ||
               (humanChoice === "paper" && computerChoice === "scissors") ||
               (humanChoice === "scissors" && computerChoice === "rock")) {
                   console.log("Computer wins!");
                   console.log("You: ", humanScore, "Computer: ", ++computerScore);

    } else if (humanChoice === computerChoice) {
        console.log("It is a tie!");
        console.log("You: ", humanScore, "Computer: ", computerScore);
    }
}
