console.log(addDollarSign(100)); // $100
// we can execute/call a `Function Declaration before initalizing it - #Hoisting

//todo: Function Declaration

function addDollarSign(value) {
  return `$${value}`;
}
console.log(addDollarSign(100)); //$100

//
//!
// console.log(addName("Wonka")); //!Cannot access 'addName' before initialization

//**  Function Expression
const addName = function (name) {
  return `Hi ${name}`;
};

console.log(addName("Wonka")); //Hi Wonka

//? Hoisting is possible only in `Function Declaration` and not with ~Function Expression
