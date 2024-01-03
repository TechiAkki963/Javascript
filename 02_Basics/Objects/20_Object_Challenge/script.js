const library = [
  {
    title: "Harry Potter",
    author: "J K Rowling",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "THE SECRET",
    author: "Rhonda Byrne",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "The Steve Jobs",
    author: "Walter",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// STEP : 2
library[0].read = true;
library[1].read = true;
library[2].read = true;
console.log(library);

//STEP: 3
const { title: firstBook } = library[0];
console.log(firstBook); // Harry Potter

//STEP : 4
const libJSON = JSON.stringify(library);
console.log(libJSON); //[{"title":"Harry Potter","author":"J K Rowling","status":{"own":true,"reading":false,"read":false},"read":true},{"title":"THE SECRET","author":"Rhonda Byrne","status":{"own":true,"reading":false,"read":false},"read":true},{"title":"The Steve Jobs","author":"Walter","status":{"own":true,"reading":false,"read":false},"read":true}]
