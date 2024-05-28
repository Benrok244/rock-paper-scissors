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

//User makes a valid choice
function getHumanChoice() {
    let humanInput = prompt("What is your Choice: rock, paper or scissors?");
    if (humanInput === "rock" || humanInput === "paper" || humanInput === "scissors") {
        return humanInput;
    } else {
        console.log("Invalid choice! Please choose rock, paper or scissors!");
        return getHumanChoice();
    }
    
}

// Play a round of rock, paper, scissors
function playRound(humanChoice, computerChoice) {    
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

//Main game function
function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log("You choose", humanChoice);
        console.log("Computer chooses", computerChoice);
        playRound(humanChoice, computerChoice);
    }
    winner();
}

//Determine and disply the overall winner
function winner() {
    if (humanScore < computerScore) {
        console.log("The computer won the game! Better luck next time!");
    } else if (humanScore > computerScore) {
        console.log("You won the game! Congratulations!");
    } else {
        console.log("The game is a tie!")
    }
}

playGame();