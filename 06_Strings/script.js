let x;

const name = "John";
const age = 30;

// Template Literals
x = `My name is ${name} and I am ${age} years old.`;

// String Properties and Method
const a = "Hello World";
// const a = new String("Hello World");    how to turn a string into string object
//x = typeof a;

x = a.length;

x = a[1]; // acess value by key

x = a.charAt(0);

x = a.__proto__;

x = a.toUpperCase();

x = a.toLowerCase();

x = a.indexOf("d");

x = a.substring(2, 5);

x = a.substring(7);

x = a.slice(2, 5);

x = a.slice(-11, 6);

//todo : trim() the white spaces
x = "      hello world";
x = a.trim(); //trim the space

//todo : replace
x = a.replace("World", "John");

//todo : includes
x = a.includes("Hell");

x = a.valueOf(); // to know the actual value

x = a.split(""); // to split characters

x = a.split(" "); // to split words

console.log(x);
