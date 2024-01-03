// Default parameters
function registeredUser(user) {
  return `${user} is registered`;
}
console.log(registeredUser("John")); //John is registered

//if the user is not register
//old way
function registeredUser(user) {
  if (!user) {
    console.log(`Bot is registered`); //Bot is registered
  }
  return `${user} is registered.`;
}
console.log(registeredUser()); //undefined is registered

//
//**new way ES6

function registeredUser(user = "Bot") {
  return `${user} is registered`;
}
console.log(registeredUser()); //Bot is registered

//Rest Parameter
function sum(...numbers) {
  return numbers;
}
console.log(sum(1, 2, 3, 4)); //(4) [1, 2, 3, 4]

//Example
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3, 4, 100)); //110

//
//Object as a param
function loginUser(user) {
  return `${user.name} with the id: ${user.id} has logged in.`;
}

const user = {
  id: 1,
  name: "Batman",
};
console.log(loginUser(user)); //Batman with the id: 1 has logged in.

console.log(
  loginUser({
    id: 2,
    name: "Superman",
  })
); //Superman with the id: 2 has logged in.

//todo: Arrays as Param

// Arrays as param
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

  console.log(item);
}
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); //2

//* */
// With Rest Operator
// with rest operator we can add more values to thearrays
function getRndom(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

  console.log(item);
}
getRndom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //2
