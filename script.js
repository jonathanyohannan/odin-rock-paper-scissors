let playerScore = 0;
let computerScore = 0;

const playerScoreP = document.querySelector("#player-score");
const playerSelectionP = document.querySelector("#player-selection");
const computerScoreP = document.querySelector("#computer-score");
const computerSelectionP = document.querySelector("#computer-selection");
const resultsP = document.querySelector("#results");

function computerPlay() {
  const wordBank = ["Rock", "Paper", "Scissors"];
  return wordBank[Math.floor(Math.random() * wordBank.length)];
}

function playRound(e) {
  if (
    resultsP.textContent === "You are the winner" ||
    resultsP.textContent === "You are the loser"
  ) {
    playerScore = 0;
    computerScore = 0;
    playerScoreP.textContent = "Player Score: 0";
    computerScoreP.textContent = "Computer Score: 0";
  }

  let playerSelection = "";
  if (this.id === "rock-btn") {
    playerSelection = "Rock";
  } else if (this.id === "paper-btn") {
    playerSelection = "Paper";
  } else {
    playerSelection = "Scissors";
  }
  let computerSelection = computerPlay();

  if (playerSelection === "Rock") {
    if (computerSelection === "Rock") {
      resultsP.textContent = "You Tied! Rock ties Rock";
      playerSelectionP.textContent = `Player Selection: ${playerSelection}`;
      computerSelectionP.textContent = `Computer Selection: ${computerSelection}`;
    } else if (computerSelection === "Paper") {
      resultsP.textContent = "You Lose! Paper beats Rock";
      playerSelectionP.textContent = `Player Selection: ${playerSelection}`;
      computerSelectionP.textContent = `Computer Selection: ${computerSelection}`;
      computerScore += 1;
      computerScoreP.textContent = `Computer Score: ${computerScore}`;
    } else if (computerSelection === "Scissors") {
      resultsP.textContent = "You Win! Rock beats Scissors";
      playerSelectionP.textContent = `Player Selection: ${playerSelection}`;
      computerSelectionP.textContent = `Computer Selection: ${computerSelection}`;
      playerScore += 1;
      playerScoreP.textContent = `Player Score: ${playerScore}`;
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      resultsP.textContent = "You Win! Paper beats Rock";
      playerSelectionP.textContent = `Player Selection: ${playerSelection}`;
      computerSelectionP.textContent = `Computer Selection: ${computerSelection}`;
      playerScore += 1;
      playerScoreP.textContent = `Player Score: ${playerScore}`;
    } else if (computerSelection === "Paper") {
      resultsP.textContent = "You Tied! Paper ties Paper";
      playerSelectionP.textContent = `Player Selection: ${playerSelection}`;
      computerSelectionP.textContent = `Computer Selection: ${computerSelection}`;
    } else if (computerSelection === "Scissors") {
      resultsP.textContent = "You Lose! Scissors beats Paper";
      playerSelectionP.textContent = `Player Selection: ${playerSelection}`;
      computerSelectionP.textContent = `Computer Selection: ${computerSelection}`;
      computerScore += 1;
      computerScoreP.textContent = `Computer Score: ${computerScore}`;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      resultsP.textContent = "You Lose! Rock beats Scissors";
      playerSelectionP.textContent = `Player Selection: ${playerSelection}`;
      computerSelectionP.textContent = `Computer Selection: ${computerSelection}`;
      computerScore += 1;
      computerScoreP.textContent = `Computer Score: ${computerScore}`;
    } else if (computerSelection === "Paper") {
      resultsP.textContent = "You Win! Scissors beats Paper";
      playerSelectionP.textContent = `Player Selection: ${playerSelection}`;
      computerSelectionP.textContent = `Computer Selection: ${computerSelection}`;
      playerScore += 1;
      playerScoreP.textContent = `Player Score: ${playerScore}`;
    } else if (computerSelection === "Scissors") {
      resultsP.textContent = "You Tied! Scissors ties Scissors";
      playerSelectionP.textContent = `Player Selection: ${playerSelection}`;
      computerSelectionP.textContent = `Computer Selection: ${computerSelection}`;
    }
  }

  if (playerScore === 5) {
    resultsP.textContent = "You are the winner";
  } else if (computerScore === 5) {
    resultsP.textContent = "You are the loser";
  }
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});
