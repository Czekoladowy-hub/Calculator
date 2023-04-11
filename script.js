const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const reset = document.querySelector(".reset");
const decimal = document.querySelector(".decimal");
const backspace = document.querySelector(".backspace");
let screen = document.querySelector(".screen");
let equal = document.querySelector(".isEqual");
let screenValue = "";
let number1 = "";
let number2 = "";
let result = "";
let sign = "";
let checkEqual;

numbers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (screenValue === "" && checkEqual === 1) {
      resetData();
    } else if (screenValue === "") {
      screen.innerHTML = "";
    }
    let input = e.target.textContent;
    screen.innerHTML += input;
    screenValue += input;
  })
);

decimal.addEventListener("click", () => {
  if (screenValue.includes(".")) {
    return;
  } else {
    screenValue += ".";
    screen.innerHTML += ".";
  }
});

backspace.addEventListener("click", () => {
  backspaceScreenValue = screenValue.slice(0, -1);
  screen.innerHTML = backspaceScreenValue;
  screenValue = backspaceScreenValue;
});

operators.forEach((operator) =>
  operator.addEventListener("click", (e) => {
    if (typeof number1 !== "number") {
      number1 = +screenValue;
      screenValue = "";
      sign = e.target.textContent;
      console.log(number1);
      console.log(sign);
    } else if (typeof number1 === "number") {
      if (screenValue !== "") {
        number2 = +screenValue;
      } else {
        checkEqual = 0;
      }
      screenValue = "";
      checkSign(sign);
      sign = e.target.textContent;
      number2 = "";
    }
  })
);

equal.addEventListener("click", () => {
  if (screenValue !== "") {
    number2 = +screenValue;
    screenValue = "";
    screen.innerHTML = "";
    checkEqual = 1;
    checkSign(sign);
    console.log(number2);
    console.log(`Result is: ${result}`);
  } else {
    return;
  }
});

function checkSign() {
  if (sign === "+") {
    screen.innerHTML = add(number1, number2);
    number1 = add(number1, number2);
  } else if (sign === "-") {
    screen.innerHTML = subtract(number1, number2);
    number1 = subtract(number1, number2);
  } else if (sign === "*") {
    if (number2 === 0 || number2 === "") {
      return;
    } else {
      screen.innerHTML = multiply(number1, number2);
      number1 = multiply(number1, number2);
    }
  } else if (sign === "/") {
    screen.innerHTML = devide(number1, number2);
    number1 = devide(number1, number2);
  }
  sign = "";
}

reset.addEventListener("click", resetData);

function resetData() {
  number1 = "";
  number2 = "";
  result = "";
  sign = "";
  checkEqual = 0;
  screenValue = "";
  screen.innerHTML = "";
  console.log("ResetData");
}

function add(number1, number2) {
  return (result = number1 + +number2);
}

function subtract(number1, number2) {
  return (result = number1 - number2);
}

function multiply(number1, number2) {
  return (result = number1 * number2);
}

function devide(number1, number2) {
  if (number2 === "") {
    return number1;
  } else if (number2 !== 0) {
    return (result = number1 / number2);
  } else if (number2 == 0) {
    resetData();
    return "( : NICE TRY";
  }
}
