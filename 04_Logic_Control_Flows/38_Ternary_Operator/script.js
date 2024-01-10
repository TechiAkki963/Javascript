// ternary Operator

const age = 19;

// if (age >= 18) {
//   console.log(" You can Vote");
// } else {
//   console.log("you are not eligible");
// }

// Ternary Operator
age >= 18 ? console.log(" You can vote") : console.log("You are not eligible");

// Assigning the conditional value to a varaible
const vote = age >= 18 ? true : false;
const vote2 = age >= 18 ? `You can vote` : `You are not eligible`;

console.log(vote);
console.log(vote2);

//Multiple Statements

const auth = true;

// let redirect;

// if (auth) {
//   console.log(`Welcome to the App`);
//   redirect = `/dashboard`;
// } else {
//   console.log(`Acess Denied`);
//   redirect = `/Login`;
// }

// const redirect = auth
//   ? alert(`Welcome to the App`, "/dashboard")
//   : alert(`Acess Denied`, `/login`);

// If we have only one output
auth ? console.log("Welcome to the App") : null;

auth && console.log("Welcome to the App");
