"use strict";
// FUNCTIONS
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";

function playGame() {
  // this will be outer loop that runs the game until given victory condition is met
  // while (!isGameOver) {}
}

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

// UI
const computerScoreEl = document.querySelector("#computer-score");
const playerScoreEl = document.querySelector("#player-score");
const roundMessage = document.querySelector(".round-message");

const choices = document.querySelector(".choice-button-wrapper");
choices.addEventListener("click", handleClick);
