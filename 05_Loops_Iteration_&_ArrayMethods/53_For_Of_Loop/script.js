// For of Loop
// In modern JS , this is preferred to loop arrays

// Loop normal array
const items = ["chair", "table", "pen", "pencil"];

for (const item of items) {
  console.log(item);
}

// script.js:7 chair
// script.js:7 table
// script.js:7 pen
// script.js:7 pencil

//

//Loop Array of Objects
const users = [{ name: "Brad" }, { name: "Tom" }, { name: "Anne" }];
for (const person of users) {
  console.log(person);
}
// {name: 'Brad'}
// script.js:21
// {name: 'Tom'}
// script.js:21
// {name: 'Anne'}

//Loop over String
const str = "Hello World";

for (const letters of str) {
  console.log(letters);
}

// script.js:33 H
// script.js:33 e
// script.js:33 l
// script.js:33 o
// script.js:33
// script.js:33 W
// script.js:33 o
// script.js:33 r
// script.js:33 l
// script.js:33 d

const map = new Map();
map.set("name", "John");
map.set("age", 30);

for (const [key, value] of map) {
  console.log(key, value);
}

// name John
// script.js:52 age 30
