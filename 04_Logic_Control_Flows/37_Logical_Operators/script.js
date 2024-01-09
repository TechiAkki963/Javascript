console.log(10 >= 25 && 30 >= 15); //False

console.log(10 < 20 && 30 > 25 && 40 < 50); //True

console.log(10 > 20 || 30 > 15);

//*  && will return first falsy value or last value
let x;

x = 10 && 20; // 20 , Here nothing is false So its returning the last value

x = 10 && 20 && 30; //30

x = 10 && 0 && 30; //0

x = 10 && "" && 0 && 30; // empty

console.log(x);

//Case Scenario

// const post = [];
const post = ["Post One", "Post Two"];
post.length > 0 && console.log(post[0]);

console.log(post);

// || it will return the first truthy value or the last value

let b;

b = 10 || 20; //10
b = 0 || 20 || 30; //20
b = 0 || null || "" || undefined; //undefined
console.log(b);

//  ?? - It returns the right side operand when the left is null or undefined
let c;
c = 10 ?? 20; //10

c = null ?? 20; //20

c = undefined ?? 20; //20

c = 0 ?? 30; //0

c = "" ?? 30; // empty

console.log(c);
