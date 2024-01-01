// Arrays Method
let result;

const myArray = [10, 20, 30, 40, 50, 60];
console.log(myArray); // (6) [10, 20, 30, 40, 50, 60]

myArray.push(100);
// to add element to the end of an Array
console.log(myArray); // (7) [10, 20, 30, 40, 50, 60, 100]

myArray.pop();
// to remove element from the end of an Array.
console.log(myArray); // (6) [10, 20, 30, 40, 50, 60]

myArray.unshift(0);
// to add element to the start of an Array.
console.log(myArray); // (7) [0, 10, 20, 30, 40, 50, 60]

myArray.shift();
// to remove element from the start of an Array.
console.log(myArray); // (6) [10, 20, 30, 40, 50, 60]

// myArray.reverse();
// to reverse the Array
// console.log(myArray); // (6) [60, 50, 40, 30, 20, 10]

//********************Includes Scenario**********************************/
result = myArray.includes(40);
console.log(result); //true

result = myArray.includes(90);
console.log(result); //false

//**************************** indexOf ******************************************/

result = myArray.indexOf(30);
console.log(result); //3

result = myArray.indexOf(100);
console.log(result); //-1

//*********************************Slice **********************************/
result = myArray.slice(1, 4);
console.log(result); // (3) [20, 30, 40]
console.log(myArray); // (6) [10, 20, 30, 40, 50, 60]
// The slice() give the sliced value but the Original Array not affected
//*********************************Splice*****************************/
// result = myArray.splice(1, 4);
console.log(result); //(4) [20, 30, 40, 50]
console.log(myArray); // (2) [10, 60]
//Splice() give the sliced value but the Original Array is affected

//******************************************************** */
// to remove a single element from Array
result = myArray.splice(3, 1);
console.log(result); // [40]
console.log(myArray); // (5) [10, 20, 30, 50, 60]
/********************************************************** */

//*******************chaining of methods **********************/
result = myArray.splice(3, 1).reverse().toString().charAt(0);
console.log(result); //5
console.log(myArray);
