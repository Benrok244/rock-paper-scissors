//Computer makes a random choice between rock, paper, scissors
function getComputerChoice() {
    let ComputerChoice = ("rock", "paper", "scissors");
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