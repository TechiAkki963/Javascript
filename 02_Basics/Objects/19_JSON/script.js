// Javascript Object Notation - JSON

//Convert an Object to JSON
const post = {
  id: 1,
  titlt: "Whats on your mind?",
};

//Convert Object to JSON String
const str = JSON.stringify(post);
console.log(str); // {"id":1,"titlt":"Whats on your mind?"}
//**This kind of data we send to the server

//! Cannot pass a property directly into JSON - first need to PARSE it
console.log(str.id);
undefined;

// Parse JSON
const obj = JSON.parse(str);
console.log(obj); // {id: 1, titlt: 'Whats on your mind?'}
// Convert JSON back to the Object

//**Acessing a property of JSON PARSEd */
console.log(obj.id); //1

// Arrays of Object
const posts = [
  { id: 1, titlt: "Whats on your feed" },
  { id: 2, titlt: "Notify me the updates" },
];

const str2 = JSON.stringify(posts);
console.log(str2); //**[{"id":1,"titlt":"Whats on your feed"},{"id":2,"titlt":"Notify me the updates"}]
