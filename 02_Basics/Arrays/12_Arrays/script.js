// Creating an Array
// There are 2 methods for creating Arrays : 1) Array Literal   2) Arrays Constructor
let result;

// Array Literal
const numbers = [1001, 899, 545, 370, 99, 999];
console.log(numbers); // (6) [1001, 899, 545, 370, 99, 999]

//Arrays Constructor
const shows = new Array(
  "Tom and Jerry",
  "Pokemon",
  "Bayblade",
  "DBZ",
  "Naruto"
);
console.log(shows);

// Playing with Arrays

//Accessing Arrays
result = numbers[0];
console.log(result); //1001

// Operations with Arrays
result = numbers[1] + numbers[3];
console.log(result); //1269

// Using arrays with string literals
result = `My favorite show ${shows[3]}`;
console.log(result);

// to get the lenght of an Array
result = shows.length;
console.log(result); // 5

// to update / change the element in an Array
shows[2] = "Power Rangers";
console.log(shows); // (5) ['Tom and Jerry', 'Pokemon', 'Power Rangers', 'DBZ', 'Naruto']
