// Arrays - Nesting , Concat and Spread Operators
let result;

const fourWheeler = ["Audi", "BMW", "Mercedes"];
const twoWheeler = ["Y2K", "Monster", "Hayabuza"];

// 1 Method to create Nested  Array
// fourWheeler.push(twoWheeler);
// console.log(fourWheeler); //(4) ['Audi', 'BMW', 'Mercedes', Array(3)]

//Acessing an element in Nested Array
// result = fourWheeler[3][1];
// console.log(result); // Monster

// 2 Method to create Nested Array
const automobiles = [fourWheeler, twoWheeler];
console.log(automobiles); // (7) ['Audi', 'BMW', 'Mercedes', Array(3), 'Y2K', 'Monster', 'Hayabuza']
//
result = automobiles[1][0];
console.log(result); //Y2K

// Concat
result = fourWheeler.concat(twoWheeler);
console.log(result); // (6) ['Audi', 'BMW', 'Mercedes', 'Y2K', 'Monster', 'Hayabuza']

// Spread Operators (...)
result = [...fourWheeler, twoWheeler];
console.log(result); //(4) ['Audi', 'BMW', 'Mercedes', Array(3)]

result = [...fourWheeler, ...twoWheeler];
console.log(result); //(6) ['Audi', 'BMW', 'Mercedes', 'Y2K', 'Monster', 'Hayabuza']

// Flatten Array
const arr = [1, 2, [3, 4], 5, [6, 7]];
result = arr.flat();
console.log(result); //(7) [1, 2, 3, 4, 5, 6, 7]

//Static Method in Array Objects
//** to find element present inside Array */
result = Array.isArray(fourWheeler);
console.log(result); //true

result = Array.isArray("Welcome");
console.log(result); //false

result = Array.from("12345");
console.log(result); // (5) ['1', '2', '3', '4', '5']

const a = 1;
const b = 2;
const c = 3;
result = Array.of(a, b, c);
console.log(result); //(3) [1, 2, 3]
