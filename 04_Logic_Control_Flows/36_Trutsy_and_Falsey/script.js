//! Falsy Value
// - false
// - 0
// - "" or '' (Empty String)
// - null
// - undefined
// - NaN

//**Truthy
// - true
// - '0' (0 in a string)
// - ' ' (space in a tring)
// - 'false' (false in a string)
// - [] - Empty Array
// - {} - Empty Object
// - function () {} (empty function)

const x = false;
if (x) {
  console.log(`It a Truthsy`);
} else {
  console.log(`It a falsy`);
}
console.log(Boolean(x));

//!Truthy and Falsy Warning
const children = 0;
/*
if (children) {
  console.log(`I have ${children} children`);
} else {
  console.log(`Please enter the number of children`);
}
*/
/**     
if (children !== undefined) {
  console.log(`I have ${children} children`);
} else {
  console.log(`Please enter the number of children`);
}
*/
if (!isNaN(children)) {
  console.log(`I have ${children} children`);
} else {
  console.log(`Please enter the number of children`);
}

//
//! Checking for Empty Array

const post = ["Post One"];
console.log(post.length);
if (post.length > 0) {
  console.log("List Post");
} else {
  console.log(`No Post to the List`);
}

//
///
////! Checking for empty Objects
const user = {
  name: "Tom",
};
console.log(Object.keys(user));
if (Object.keys(user).length > 0) {
  console.log("List User");
} else {
  console.log(`No user`);
}

//Loose Equality
//** to avoid use === always */
console.log(false == 0);
console.log("" == 0);
console.log(null == undefined);
