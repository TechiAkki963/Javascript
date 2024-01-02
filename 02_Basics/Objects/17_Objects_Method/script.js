let x;

// const todo = {};
const todo = new Object();

todo.id = 1;
todo.task = "Dhaniya leke aa";
todo.completed = false;
x = todo;
console.log(x); //{ id: 1, task: 'Dhaniya leke aa', completed: false }

// Nested Object
const location = {
  address: {
    cordinates: {
      lat: 40.293,
      long: -7.252,
    },
  },
};
//Acessing the value of Nested Object
x = location.address.cordinates.lat;
console.log(x); //40.293

// Spread Operator in Objects
const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: 3,
  d: 4,
};

const obj3 = { ...obj1, ...obj2 };
console.log(obj3); //{ a: 1, b: 2, c: 3, d: 4 }

//!Old Spread Method
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

//Objects in Arrays
const todos = [
  { id: 1, task: "Bring Milk" },
  { id: 2, task: "work office" },
  { id: 3, task: "eat dinner" },
];

x = todos[0].task;
console.log(x); // Bring Milk

//to get the Keys of an Object
x = Object.keys(todo);
console.log(x); //[ 'id', 'task', 'completed' ]

//to get the length of an object
x = Object.keys(todo).length;
console.log(x); //3

//to get only the values

x = Object.values(todo);
console.log(x); //[ 1, 'Dhaniya leke aa', false ]

x = Object.entries(todo);
console.log(x); //[ [ 'id', 1 ], [ 'task', 'Dhaniya leke aa' ], [ 'completed', false ] ]

x = todo.hasOwnProperty("name");
console.log(x); //false

//
//**Object freeze -- with this the Key of Object Properties cannot be changed
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode
console.log(obj.prop); //42
