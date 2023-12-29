const myString = "developer";

//Solution 1
let newString =
  myString.charAt(0).toUpperCase() + myString.slice(1, myString.length);

//Solution 2
let newString = `${myString.charAt(0).toUpperCase()}${myString.slice(
  1,
  myString.length
)}`;

console.log(newString);
