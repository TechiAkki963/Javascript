const x = 100;

//**** if we check var and (let , const variable in windows object) */
const foo = 1;
var bar = 2;
//bar  = 2 get displayed in window object.
// but the const and let value is not added to the windows object.

if (true) {
  const y = 250;
  console.log(x + y); //350
}

// console.log(x + y); //! Uncaught ReferenceError: y is not defined
// as y is inside block scope {}

for (let i = 0; i <= 10; i++) {
  console.log(i); // 1 2 3 4 5 6 7 8 9 10
}

// console.log(i); //!Uncaught ReferenceError: i is not defined

//!
//*var is not block scope , but let and const are block scope

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

// console.log(a); //!Uncaught ReferenceError: a is not defined
// console.log(b);  //!Uncaught ReferenceError: b is not defined
console.log(c); //700

//!
// `var` is not a function scope{} variable, so it is not executed out of function {} scope.
//but can be executed out of loop scope{}
function run() {
  var d = 500;
  console.log(d); //32
}
run();
