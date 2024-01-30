// # Create the randomNumber
const randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);
// # Select the classes and id required in DOM
const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

// # Create element to display
const p = document.createElement("p");

// # To show the guess value
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

//# Validate the value
function validateGuess(guess) {
  //
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number > 1");
  } else if (guess > 100) {
    alert("Please enter a number < 100");
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Game Over , Random Number was ${randomNumber}`);
      gameEnd();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

//# Check the Guess Value
function checkGuess(guess) {
  //
  if (guess === randomNumber) {
    displayMessage("You Won");

    gameEnd();
  } else if (guess < randomNumber) {
    displayMessage("Number is TOOOO low");
  } else if (guess > randomNumber) {
    displayMessage("Number is TOOOO High");
  }
}

function displayGuess(guess) {
  //
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

//# Display Message
function displayMessage(message) {
  //
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function gameEnd() {
  //
}

function newGame() {
  //
}
