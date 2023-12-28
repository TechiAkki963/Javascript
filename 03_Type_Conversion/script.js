//todo : Convert String to a Number */
let amount = "100";

// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);
console.log(amount, typeof amount);

//todo : Convert Number to String */
let cash = 100;
// cash = cash.toString();
cash = String(cash);
console.log(cash, typeof cash);

//todo : Convert String to Float Number
let temp = "99.3";
temp = parseFloat(temp);
console.log(temp, typeof temp);

//todo : Convert Number to Boolean
let result = 1;
result = Boolean(result);
console.log(result, typeof result);
//**Any number between 1-9 will be True and 0 is False */

//! Conditions for NaN - Not a Number
let greet = "hello ";
greet = parseInt(greet);
console.log(greet, typeof greet);
// Cannot convert a Word to Number. Output will be NaN.
console.log(Math.sqrt(-1));
// Square Root of a -ve Number . NaN
console.log(1 + NaN);
// Operations with NaN . Output will be NaN
console.log("foo" / 3);
//Operations with String. Output will be NaN
console.log(undefined + undefined);
// Operations will Undefined . Output will be NaN
