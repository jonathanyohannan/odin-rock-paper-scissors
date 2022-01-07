function computerPlay() {
  let wordBank = ["Rock", "Paper", "Scissors"];
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
  }
}
