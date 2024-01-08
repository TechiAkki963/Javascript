"use strict";

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
