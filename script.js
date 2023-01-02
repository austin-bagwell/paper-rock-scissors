"use strict";
// UI
const computerScoreEl = document.querySelector("#computer-score");
const playerScoreEl = document.querySelector("#player-score");
const roundMessage = document.querySelector(".round-message");

const choices = document.querySelector(".choice-button-wrapper");
choices.addEventListener("click", handleClick);

// TODO should I wrap all this in a game class for practice with OOP?
// FUNCTIONS
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function gameOver() {
  return playerScore >= 5 || computerScore >= 5;
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  roundWinner = "";
}

function playRound(playerSel, computerSel) {
  if (playerSel === computerSel) {
    roundWinner = "This round was a tie";
  }

  if (
    (playerSel === "rock" && computerSel === "scissors") ||
    (playerSel === "scissors" && computerSel === "paper") ||
    (playerSel === "paper" && computerSel === "rock")
  ) {
    playerScore++;
    roundWinner = "player";
  } else {
    computerScore++;
    roundWinner = "computer";
  }
}

function updateScoreboard() {
  computerScoreEl.innerText = computerScore;
  playerScoreEl.innerText = playerScore;
  console.log(roundWinner);
}

function handleClick(e) {
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  const playerChoice = e.target.value;
  const computerChoice = getComputerChoice();

  playRound(playerChoice, computerChoice);
  updateScoreboard();

  if (gameOver()) {
    roundMessage.innerText = `${roundWinner} wins!`;
    restartGame();
  } else roundMessage.innerText = `${roundWinner} won this round!`;
}
