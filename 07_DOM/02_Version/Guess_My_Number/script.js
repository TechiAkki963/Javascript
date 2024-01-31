"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess);
  //
  // # Checks
  if (!guess || guess < 1 || guess > 20) {
    //
    // document.querySelector(".message").textContent = "No Message⛔";
    displayMessage(`Enter a valid number ⛔`);
    //
  } else if (guess === secretNumber) {
    //
    displayMessage(`You Loose 🎉`);
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30px";

    if (score > highscore) {
      score = highscore;
      document.querySelector(".highscore").textContent = highscore;
    }

    //
  } else if (guess !== secretNumber) {
    //
    // scenario #1
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too High` : `Too Low`);
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(`You Loss the game😔`);
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
