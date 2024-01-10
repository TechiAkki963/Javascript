// For Loop

// for ([initialization];[condition];[increment/decrement])

for (let i = 0; i <= 10; i++) {
  console.log("Number" + i);
} //Output from Number 1 to Number 10

//
//

for (let j = 0; j <= 10; j = j + 2) {
  console.log("Number" + j);
} // Output Alternate Numbers

//**Nested Loop

for (let m = 0; m <= 10; m++) {
  console.log(m);
  {
    for (let n = 0; n <= 10; n++) {
      console.log(`${m}*${n}=${m * n}`);
    }
  }
}

//
//

const names = ["John", "Jesse", "Sara", "Jim", "Tom"];

for (let a = 0; a < names.length; a++) {
  if (a === 2) {
    console.log(`Sara is Good Girl`);
  } else {
    console.log(names[a]);
  }
}

//John , Jesse , Sara is Good Girl , Jim , Tom
