function computerPlay() {
  const wordBank = ["Rock", "Paper", "Scissors"];
  return wordBank[Math.floor(Math.random() * wordBank.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.substring(0, 1).toUpperCase() +
    playerSelection.substring(1).toLowerCase();

  if (playerSelection === "Rock") {
    if (computerSelection === "Rock") {
      return "You Tied! Rock ties Rock";
    } else if (computerSelection === "Paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "Scissors") {
      return "You Win! Rock beats Scissors";
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      return "You Win! Paper beats Rock";
    } else if (computerSelection === "Paper") {
      return "You Tied! Paper ties Paper";
    } else if (computerSelection === "Scissors") {
      return "You Lose! Scissors beats Paper";
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "Paper") {
      return "You Win! Scissors beats Paper";
    } else if (computerSelection === "Scissors") {
      return "You Tied! Scissors ties Scissors";
    }
  } else {
    return null;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter Rock, Paper, or Scissors:", "");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result !== null) {
      if (result.includes("Win")) {
        playerScore++;
      } else if (result.includes("Lose")) {
        computerScore++;
      }
    }
  }

  if (playerScore > computerScore) {
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log("You are the winner");
  } else if (playerScore < computerScore) {
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log("You are the loser");
  } else {
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log("You tied the computer");
  }
}

game();
