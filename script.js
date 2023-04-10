const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const reset = document.querySelector(".reset");
let screen = document.querySelector(".screen");
let equal = document.querySelector(".isEqual");
let screenValue = "";
let number1 = "";
let number2 = "";
let result = "";
let sign = "";

numbers.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (screenValue === "") {
      screen.innerHTML = "";
    }
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
      sign = e.target.textContent;
      console.log(number1);
      console.log(sign);
    } else if (typeof number1 === "number") {
      if (screenValue !== "") {
        number2 = +screenValue;
      } else {
        return;
      }
      screenValue = "";
      checkSign(sign);
      sign = e.target.textContent;
      console.log(number2);
      console.log(`Result is: ${result}`);
    }
  })
);

equal.addEventListener("click", () => {
  if (screenValue !== "") {
    number2 = +screenValue;
    screenValue = "";
    screen.innerHTML = "";
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
    screen.innerHTML = multiply(number1, number2);
    number1 = multiply(number1, number2);
  } else if (sign === "/") {
    screen.innerHTML = devide(number1, number2);
    number1 = devide(number1, number2);
  }
  sign = "";
}

reset.addEventListener("click", () => {
  number1 = "";
  number2 = "";
  result = "";
  sign = "";
  screenValue = "";
  screen.innerHTML = "";
});

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
  if (number2 !== 0) {
    return (result = number1 / number2);
  } else if (number2 === "") {
    return;
  } else if (number2 === 0) {
    return "( : NICE TRY";
  }
}
