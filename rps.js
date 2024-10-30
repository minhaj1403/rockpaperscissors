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
       result = "It's a tie!";
   }
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            result = "Computer threw paper. Computer wins!";
            computerScore++;
        } else if (computerChoice === "scissors") {
            result = "Computer threw scissors. You wins";
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            result = "Computer threw scissors. Computer wins!";
            computerScore++;
        } else if (computerChoice === "rock") {
            result = "Computer threw rock. You win!";
            humanScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            result = "Computer threw rock. Computer wins!";
            computerScore++;
        } else if (computerChoice === "paper") {
            result = "Human threw scissors. You win!";
            humanScore++;
        }
    }

    return result;
}



function playGame() {
    // for (let i = 0; i < 5; i++) {
    //     let humanChoice = getHumanChoice();
    //     let computerChoice = getComputerChoice();
    //     playRound(humanChoice, computerChoice);
    // }
    function updateScores() {
        humanScoreDiv.textContent = "Human score: " + humanScore;
        computerScoreDiv.textContent = "Computer score: " + computerScore;
    }

    function disableButtons() {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }

    function checkWinner() {
        if (humanScore === 5) {
            resultDiv.textContent += " Congratulations! You won the game!";
            disableButtons();
        } else if (computerScore === 5) {
            resultDiv.textContent += " Computer won the game! Better luck next time.";
            disableButtons();
        }
    }

    const body = document.querySelector('body');

    let rockButton = document.createElement("button");
    rockButton.textContent = "Rock";
    body.appendChild(rockButton);

    let paperButton = document.createElement("button");
    paperButton.textContent = "Paper";
    body.appendChild(paperButton);
    
    let scissorsButton = document.createElement("button");
    scissorsButton.textContent = "Scissors";
    body.appendChild(scissorsButton);

    let resultDiv = document.createElement("div");
    body.appendChild(resultDiv);

     
    rockButton.addEventListener("click", () => {
        const resultMessage = playRound(rockButton.textContent, getComputerChoice());
        resultDiv.textContent = resultMessage;
        updateScores();
        checkWinner();
    });

    paperButton.addEventListener("click", () => {
        const resultMessage = playRound(paperButton.textContent, getComputerChoice());
        resultDiv.textContent = resultMessage;
        updateScores();
        checkWinner();
    });

    scissorsButton.addEventListener("click", () => {
        const resultMessage = playRound(scissorsButton.textContent, getComputerChoice());
        resultDiv.textContent = resultMessage;
        updateScores();
        checkWinner();
    });

    let humanScoreDiv = document.createElement("div");
    humanScoreDiv.id = "human-score";
    humanScoreDiv.textContent = "Human score: " + humanScore;
    body.appendChild(humanScoreDiv);

    let computerScoreDiv = document.createElement("div");
    computerScoreDiv.id = "computer-score";
    computerScoreDiv.textContent = "Computer score: " + computerScore;
    body.appendChild(computerScoreDiv);

}

playGame();