let x;

const name = "John";
const age = 30;

// Template Literals
x = `My name is ${name} and I am ${age} years old.`;

// String Properties and Method
const a = "Hello World";
// const a = new String("Hello World");    how to turn a string into string object
//x = typeof a;

x = a.length; // 11

x = a[1]; //e

x = a.charAt(0); //H

x = a.__proto__; //String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}

x = a.toUpperCase(); //HELLO WORLD

x = a.toLowerCase(); //hello world

x = a.indexOf("d"); //10

x = a.substring(2, 5); //llo

x = a.substring(7); //orld

x = a.slice(2, 5); //llo

x = a.slice(-11, 6); //Hello

//todo : trim() the white spaces
x = "      hello world";
x = a.trim(); //trim the space    Hello World

//todo : replace
x = a.replace("World", "John"); // Hello John

//todo : includes
x = a.includes("Hell"); //true

x = a.valueOf(); // to know the actual value   "Hello World"

x = a.split(""); // to split characters     (11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

x = a.split(" "); // to split words     (2) ['Hello', 'World']
console.log(x);
