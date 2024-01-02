const first_name = "John";
const last_nmae = "Doe";
const age = 30;

const person = {
  first_name,
  last_nmae,
  age,
};
console.log(person); //{first_name: 'John', last_nmae: 'Doe', age: 30}
console.log(person.age); //30

//** */
// Destructuring an Object
const todo = {
  id: 1,
  title: "Make the Design",
  user: {
    team_name: "Red",
  },
};

const {
  id: todoId, //**  Renaming a Property Name */
  title,
  user: { team_name },
} = todo;

// console.log(id, title); // 1 'Make the Design'
console.log(team_name); // Red

console.log(todoId); // 1 //**After renaming the Property Name */

//** */
// Destructing an Array
const numbers = [23, 67, 33, 49];

const [first, second, ...rest] = numbers; // Rest operator
console.log(first); //23
console.log(rest); // (2) [33, 49]
