//?Primitive Datatype
// String - Sequence of Character. Must be in " " or ` `.
// Number - Integers as well as floating-point numbers.
// Boolean - Logical entity / True or False.
// Null - Intentionally absence of any object value.
// Undefined - A variable that has not yet been assigned / defined.
// Symbol - built-in object whose constructor return a unique symbol.
// BigInt - Numbers that are greater than the "Number" type can handle.

//? Reference type
//Reference type or "Object" are a non-primitive valueand when assigned to a variable, the variable is given a reference to that value.

//Object literals, Arrays and Functions are all reference type

//todo: String
const firstName = "Sara";
console.log(firstName, typeof firstName); //**Sara string */

//todo: Numbers
const age = 30;
console.log(age, typeof age); //**30 number */

const temperature = 98.3;
console.log(temperature, typeof temperature); //**98.3 number */

//todo: Boolean
const graduate = true;
console.log(graduate, typeof graduate); //**true boolean */

//todo: Null
const has_driving_license = null;
console.log(has_driving_license, typeof has_driving_license); //**null 'object'*/

//todo: undefined
let score;
console.log(score, typeof score); //**undefined undefined */

//todo: Symbol
let id = Symbol("id");
console.log(id, typeof id); //**Symbol(id) symbol */

//todo: BigInt
const n = 784516515321678654132123n;
console.log(n, typeof n); //**784516515321678654132123n bigint */

//? Reference Types
//todo: Arrays
const numbers = [1, 2, 3, 4];
console.log(numbers, typeof numbers); //**[ 1, 2, 3, 4 ] object*/

//todo: Objects
const person = {
  name: "Bradd",
  age: "30",
};
console.log(person, typeof person); //**{ name: 'Bradd', age: '30' } object */

//todo: Function
function sayHello() {
  console.log("Hello");
}
console.log(sayHello(), typeof sayHello); //**undefined 'function'*/
//! typeof Function is given as function but actually is an object

//************************************************************************************************* */
//? Stack and Heap  (Memory Management)
//**  the Variable and its value of a primitive datatype are stored in the Stack */
//** Stack for all Primitive Datatype */
//** but the variable of reference datatype/object is stored in Stack and the value is stored in Heap */

let myCodingLanguage = "Javascript";

let anotherCodingLanguage = myCodingLanguage;
anotherCodingLanguage = "Python";
console.log(anotherCodingLanguage); //Python
console.log(myCodingLanguage); //Javascript

let userOne = {
  id: 1,
  email: "One@xyx.com",
};

console.log(userOne);

let userTwo = userOne;
userTwo.email = "Two@xyx.com";

console.log(userTwo);
console.log(userOne);
