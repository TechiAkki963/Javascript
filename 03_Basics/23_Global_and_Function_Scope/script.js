// Windows is at the highest level of Global Scope
// window.alert("Hello Develoeprs");
// as window is at the top level so no need to mention
// alert("Hi");

//scope {}

console.log(window.innerWidth);
console.log(innerWidth);

//Variable In global scope
const x = 100;
console.log(x, `in global `);

//Variable In function scope
function run() {
  console.log(window.innerHeight, `in function`);
  //   console.log(innerHeight);
  console.log(x, `in function`);
}
run(); //100 'in function'

//Variables  In block
if (true) {
  console.log(x, `in block`);
}
//100 'in block'

// Global vs Function scope
function add() {
  const y = 50;
  console.log(y);
}
add(); //50
// console.log(y); //! y is not defined
// y as declared inside the function scope is valid only in that scope and not in global scope

// Global scope with Function scope
function addTwo() {
  const y = 5;
  console.log(x + y);
}
addTwo(); //105
// here the value of x from the global scope is add to the y in the function scope

function addThree() {
  const x = 2;
  const y = 5;
  console.log(x * y);
}
addThree(); //10
// here the `x=100` from the Global scope is overide by the `x=2` in the function scope
