//** Function Nested Scope */

function first() {
  const x = 100;

  function second() {
    const y = 200;
    console.log(x + y); // 300
  }
  //   console.log(y); //! Uncaught ReferenceError: y is not defined
  //the value of y cannot be logged out of child function scope
  // we can acess parent variable in the child but child cannot be access in the parent

  second();
}

first();

//* Block nested scope */

if (true) {
  const x = 100;

  if (x === 100) {
    const y = 300;
    console.log(x + y); //400
  }
  //   console.log(y); //!Uncaught ReferenceError: y is not defined
}
