// const name = "Bradley";
// console.log(name); //!Uncaught SyntaxError: Identifier 'name' has already been declared (at script.js:1:1)
// Reason for error : the variable "name" is declared in "other.js" file also

(function () {
  const name = "Bradley";
  console.log(name); // Bradley
})();
//The error Uncaught SyntaxError: Identifier 'name' has already been declared (at script.js:1:1) is resolved as the function is declared inside IIFE()

// Passing =>() in IIFE
(function () {
  const hello = () => console.log(`Hello from IIFE`);
  hello(); //Hello from IIFE
})();

// hello(); //!Uncaught ReferenceError: hello is not defined

//Passing Parameters in IIFE
(function (name) {
  console.log(`Hello ${name}`); //Hello Sarah
})("Sarah");
