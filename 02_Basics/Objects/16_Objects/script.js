let x;

//Object Literal

const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Street",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "code"],
};
console.log(person);

// Acessing the Key values

// . notation
x = person.name;
console.log(x); // John Doe

// [] Bracket notation
x = person["name"];
console.log(x); // John Doe

// Object in Object with . notation
x = person.address.state;
console.log(x); // MA

// Array in Object with [] notation
x = person.hobbies[1];
console.log(x); // code

//Update a property
person.name = "Jane Doe";
console.log(person);

person["isAdmin"] = false;
x = person.isAdmin;
console.log(x); //false

//to Remove a Property
delete person.age;
console.log(person); //{name: 'Jane Doe', isAdmin: false, address: {…}, hobbies: Array(2)}address: {street: '123 Street', city: 'Boston', state: 'MA'}hobbies: (2) ['music', 'code']
//age is removed

//to  add a Property
person.hasChildren = true;
console.log(person); //address: {street: '123 Street', city: 'Boston', state: 'MA'},     hasChildren: true    ,hobbies: (2) ['music','code']isAdmin:false,name:"Jane Doe"

//**  Function*/
// to acess the Property Key in a Function
person.greet = function () {
  console.log(`Hello my name is ${person.name}`);
};

person.greet(); // Hello my name is Jane Doe
