function sayHello() {
  console.log("Hello Akshay");
}
//calling a function
sayHello(); // Hello Akshay

//**
// Function passing Parameters
function addNumbers(number1, number2) {
  console.log(number1 + number2);
}
addNumbers(5, 10); //15

//***
// Functions and return
function subNumber(num1, num2) {
  return num1 - num2;

  console.log("Anything after return will not be display");
}
const result = subNumber(10, 2);
console.log(result); //8
console.log(subNumber(20, 5)); //15
