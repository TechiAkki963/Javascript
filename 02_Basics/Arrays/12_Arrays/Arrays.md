# Arrays

const myArrays = [0, 1, 2, 3, 4, 5, true, "Robocop"];
console.log(myArrays[7]);

const numbers = new Array(10, 20, 30, 40);
console.log(numbers[1]);

// Arrays methods
myArrays.push(7);
console.log(myArrays); // [0, 1, 2, 3, 4, 5, true, 'Robocop', 7]
// To add item to the end of array

myArrays.pop();
console.log(myArrays); // (8) [0, 1, 2, 3, 4, 5, true, 'Robocop']
// To remove item from the end of Array

myArrays.unshift(101);
console.log(myArrays); //(9) [101, 0, 1, 2, 3, 4, 5, true, 'Robocop']
// to add value at the begining of an array

myArrays.shift();
console.log(myArrays); //(8) [0, 1, 2, 3, 4, 5, true, 'Robocop']
// to remove value at the end of an Array

console.log(myArrays.includes(11)); // False
// To search a value in an array
// It gives output in Boolean

console.log(myArrays.indexOf(11)); //-1 means false
//It gives the location of an array
console.log(myArrays.indexOf(4)); //4

const newArr = myArrays.join();
//join(); converts array into string
console.log(newArr, typeof newArr);
console.log(myArrays);
