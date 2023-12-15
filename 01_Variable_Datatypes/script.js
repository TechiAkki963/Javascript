// Way to declare Variable
// var , let , const

let firstName = "John";

let lastName = "Doe";

console.log(firstName, lastName);

/*
console.log(age);
//! Cannot access 'age' before initialization
var age = 30;
*/

let age = 30;
console.log(age);

//Naming Conventions
//-Only letters, numbers, underscores and dollarsigns
//-Can't start with a number

//Multiple Formatting
//* firstName = camelCase
//* FirstName = PascalCase
// first_name = underscore
// firstname = lowercase

//************************************* */
// todo : Reassign Variable
//* using "let"

age = 31;
console.log(age);

let score;
console.log(score);

score = 100;
console.log(score);

// todo : Reassign Variable
//* using "const"
const x = 50;
console.log(x);
/*
x = 51;
console.log(x); 
//! Error : Assignment to constant variable
*/

/*
const y;
console.log(y);
//! SyntaxError: Missing initializer in const declaration
*/
