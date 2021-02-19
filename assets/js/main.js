let btn = document.getElementById("btn");
let costumNr = document.getElementById("costumNr");
let incrementTxt = document.getElementById("incrementTxt");
let incrementTxt2 = document.getElementById("incrementTxt2");
let randomNrDisplay = document.getElementById("randomNrDisplay");
let guessRound4 = document.getElementById("guessRound4");
let guessRound5 = document.getElementById("guessRound5");
let guessRound6 = document.getElementById("guessRound6");
let guessRoundCostum = document.getElementById("guessRoundCostum");
let guessedNumber = document.getElementById("guessedNumber");
let textBox = document.getElementById("textBox");
let playAgain = document.getElementById("playAgain");
let randomNr;
let maxGuessNr;
let increment = 0;
let a;
function randomGenerator() {
  a = Math.floor(Math.random() * 11);
  randomNrDisplay.innerHTML = a;
  increment = 0;
  incrementTxt.innerHTML = 0;
  guessRound4.checked
    ? (incrementTxt2.innerHTML = 4)
    : guessRound5.checked
    ? (incrementTxt2.innerHTML = 5)
    : guessRound6.checked
    ? (incrementTxt2.innerHTML = 6)
    : guessRoundCostum.checked
    ? (incrementTxt2.innerHTML = costumNr.value)
    : null;
  textBox.innerHTML = " ";
  btn.style.visibility = "visible";
  playAgain.style.visibility = "hidden";
}

function counterDisplay() {
  if (guessRound4.checked) {
    incrementTxt2.innerHTML = 4;
    costumNr.style.visibility = "hidden";
  } else if (guessRound5.checked) {
    costumNr.style.visibility = "hidden";
    incrementTxt2.innerHTML = 5;
  } else if (guessRound6.checked) {
    costumNr.style.visibility = "hidden";
    incrementTxt2.innerHTML = 6;
  } else if (guessRoundCostum.checked) {
    incrementTxt2.innerHTML = costumNr.value;
    costumNr.style.visibility = "visible";
  }
}

randomGenerator();

const guessDisplay = () => {
  if (a < guessedNumber.value) {
    console.log(
      "you need to guess lower than" + guessedNumber.value + ", try again"
    );
    textBox.innerHTML += `<br> you need to guess lower than ${guessedNumber.value} , try again`;
  } else if (a > guessedNumber.value) {
    console.log(
      "you need to guess higher than" + guessedNumber.value + ", try again"
    );
    textBox.innerHTML += `<br> you need to guess higher than ${guessedNumber.value} , try again`;
  } else {
    console.log("you won! you got me in" + increment + "guesses, play again");
    textBox.innerHTML += `<br> you won! you got me in ${increment}  guesses, play again`;

    btn.style.visibility = "hidden";
    playAgain.style.visibility = "visible";
  }
};

const guess = () => {
  if (guessRound4.checked) {
    if (increment < 4) {
      increment += 1;
      guessDisplay();
    } else {
      console.log("u reached max guesses");
      textBox.innerHTML += `<br> you have reached your maximum guesses, the number you were guessing is ${a}, play again`;
      btn.style.visibility = "hidden";
      playAgain.style.visibility = "visible";
    }
  } else if (guessRound5.checked) {
    if (increment < 5) {
      increment += 1;
      guessDisplay();
    } else {
      console.log("u reached max guesses");
      textBox.innerHTML += `<br> you have reached your maximum guesses, the number you were guessing is ${a}, play again`;
      btn.style.visibility = "hidden";
      playAgain.style.visibility = "visible";
    }
  }
  if (guessRound6.checked) {
    if (increment < 6) {
      increment += 1;
      guessDisplay();
    } else {
      textBox.innerHTML += `<br> you have reached your maximum guesses, the number you were guessing is ${a}, play again`;
      btn.style.visibility = "hidden";
      playAgain.style.visibility = "visible";
    }
  } else if (guessRoundCostum.checked) {
    if (increment < costumNr.value) {
      increment += 1;
      guessDisplay();
    } else {
      console.log("u reached max guesses");
      textBox.innerHTML += `<br> you have reached your maximum guesses, the number you were guessing is ${a}, play again`;
      btn.style.visibility = "hidden";
      playAgain.style.visibility = "visible";
    }
  }
  incrementTxt.innerHTML = increment;
};
btn.addEventListener("click", guess);
playAgain.addEventListener("click", randomGenerator);
