/*
function add(a, b) {
  return a + b;
}

console.log(add(1, 2));
*/

//Arrow Function
const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2)); //3

//Implicit Function
const sub = (x, y) => x - y;
console.log(sub(10, 5)); //5

// Single Parameter Arrow Function
const double = (a) => a * 2;
console.log(double(10)); //20

//Return object
//while using object we use () instead of {}
const createObj = () => ({
  name: "John Snow",
});
console.log(createObj()); //{name: 'John Snow'}

//

// Arrow function call back
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n); // 1  2  3  4  5
});

numbers.forEach((n) => console.log(n)); //1 2 3 4 5
