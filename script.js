function computerPlay() {
  let wordBank = ["Rock", "Paper", "Scissors"];
  return wordBank[Math.floor(Math.random() * wordBank.length)];
}
