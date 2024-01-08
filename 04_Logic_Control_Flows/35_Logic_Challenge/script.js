"use strict";
/*
const calculator = function (num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else {
    return `Error 404`;
  }
};

console.log(calculator(5, 2, "@"));
*/
// using Switch

const calc = function (num1, num2, opt) {
  let x;

  switch (opt) {
    case "+":
      x = num1 + num2;
      break;
    case "-":
      x = num1 - num2;
      break;
    case "/":
      x = num1 / num2;
      break;
    case "*":
      x = num1 * num2;
      break;
    default:
      x = `Error Invalid Operation`;
  }
  console.log(x);
  return x;
};

calc(5, 3, "*");
