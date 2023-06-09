let display = "0";
let runningTotal = 0;
let operator;

const screen = document.querySelector("#screen");

const button = document.querySelectorAll(".btn");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (event) {
    buttonClicked(event.target.innerText);
  });
}

// Detects which button is clicked.
function buttonClicked(value) {
  if (isNaN(value)) {
    symFunction(value);
  } else {
    numFunction(value);
  }
  screen.innerText = display;
}

// For displaying numbers to the screen.
function numFunction(numString) {
  if (display === "0") {
    display = numString;
  } else {
    display += numString;
  }
}

// Detects which symbol is clicked and the effect.
function symFunction(symbol) {
  switch (symbol) {
    case "C":
      display = "0";
      runningTotal = 0;
      break;
    case "=":
      if (operator === undefined) {
        return;
      } else {
        calcFunction(parseFloat(display));
        operator = undefined;
        display = runningTotal.toString();
        runningTotal = 0;
      }
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
    case "%":
    case "^":
      mathFunction(symbol);
      break;
    case "+/−":
      const numDisplay = parseFloat(display);
      display = (numDisplay * -1).toString();
      break;
    case ".":
      if (!display.includes(".")) {
        display += ".";
      }
  }
}

// Connecting the symbol pressed to the calculation.
function mathFunction(symbol) {
  if (display === "0") {
    return;
  }
  const numDisplay = parseFloat(display);
  if (runningTotal === 0) {
    runningTotal = numDisplay;
  } else {
    calcFunction(numDisplay);
  }
  operator = symbol;
  display = "0";
}

// Handling the calculation.
function calcFunction(numDisplay) {
  if (operator === "+") {
    runningTotal += numDisplay;
  } else if (operator === "−") {
    runningTotal -= numDisplay;
  } else if (operator === "×") {
    runningTotal *= numDisplay;
  } else if (operator === "÷") {
    runningTotal /= numDisplay;
  } else if (operator === "%") {
    runningTotal *= numDisplay / 100;
  } else if (operator === "^") {
    runningTotal **= numDisplay;
  }
}
