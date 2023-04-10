const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let screen = document.querySelector(".screen");
let equal = document.querySelector(".isEqual");
let screenValue = "";
let number1;
let number2;
let result;
let sign;

numbers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (screenValue === "") {
      screen.innerHTML = "";
    }
    console.log(e.target.textContent);
    let input = e.target.textContent;
    screen.innerHTML += input;
    screenValue += input;
  })
);

operators.forEach((operator) =>
  operator.addEventListener("click", (e) => {
    if (typeof number1 !== "number") {
      number1 = +screenValue;
      screenValue = "";
      screen.innerHTML = "";
      sign = e.target.textContent;
      console.log(sign);
    } else if (typeof number1 === "number") {
      number2 = +screenValue;
      screenValue = "";
      screen.innerHTML = "";
      checkSign(sign);
      sign = e.target.textContent;
    }
  })
);

equal.addEventListener("click", () => {
  number2 = +screenValue;
  screenValue = "";
  screen.innerHTML = "";
  checkSign(sign);
});

function checkSign() {
  if (sign === "+") {
    screen.innerHTML = add(number1, number2);
    number1 = add(number1, number2);
  } else if (sign === "-") {
    screen.innerHTML = subtract(number1, number2);
    number1 = subtract(number1, number2);
  } else if (sign === "*") {
    screen.innerHTML = multiply(number1, number2);
    number1 = multiply(number1, number2);
  } else if (sign === "/") {
    screen.innerHTML = devide(number1, number2);
    number1 = devide(number1, number2);
  }
}

function add(number1, number2) {
  return (result = number1 + number2);
}

function subtract(number1, number2) {
  return (result = number1 - number2);
}

function multiply(number1, number2) {
  return (result = number1 * number2);
}

function devide(number1, number2) {
  return (result = number1 / number2);
}
