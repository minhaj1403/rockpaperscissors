function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Enter your choice between rock, paper, and scissors: ");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
   humanChoice = humanChoice.toLowerCase();

   if (humanChoice === computerChoice) {
       console.log("It's a tie!");
   }
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("Computer threw paper. Computer wins!");
            computerScore++;
        } else if (computerChoice === "scissors") {
            console.log("Computer threw scissors. You wins");
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("Computer threw scissors. Computer wins!");
            computerScore++;
        } else if (computerChoice === "rock") {
            console.log("Computer threw rock. You win!");
            humanScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("Computer threw rock. Computer wins!");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("Human threw scissors. You win!");
            humanScore++;
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

playGame();