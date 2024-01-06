let x = 100;
let y = 50;
function addNum(num1, num2) {
  let add = num1 + num2;
  return add;
}
let add1 = addNum(x, y);
let add2 = addNum(10, 5);

//** Creation Phase */
//Line 1 : when we create 'let x= 100;' , the variable 'x' is allocated in memory and stores "undefined"
//? x = 'undefined'
//Line 2 : when we create 'let y= 50;' , the variable 'y' is allocated in memory and stores "undefined"
//? y = 'undefined'

//Line 3: when we create 'function addNum()', the memory is allocated to it and Stores all the code

//Line 7 : add1 is allocated in memory and stored as 'undefined'
//Line 8 : add2 is allocated in memory and stored as 'undefined'

//?what happen when we execute it
//**Execution Phase */
// Line 1 : The Value 100 is placed in the variable 'x';
// Line 2 : The Value 50 is placed in the variable 'y'
// Line 3 : Skips the Line 3 as there is nothing to execute.
// Line 7 : calls the function addNum () and create a new function execution context.

//**Function Execution Creation Phase*/
// Line 3 : 'num1' and 'num2' are allocated in the memory and stored as 'undefined'
// Line 4 : 'add' variable is allocated memory and stores 'undefined'

//**Function Execution Phase  */
// Line 3 : num1 and num 2 are assigned value 100 and 50
// Line 4 : calculation is done and the value 150 is add to the variable 'add'.
// Line 5 : 'return' tells the function Execution Context to return to the Global EC with value of 'add' 150
// Line 7 : the returned 'add' value is put into the 'num1' variable.

// Line 8 : The whole procedure of Line 7 from the start will be repeated. Another function Execution Context will be Opened and do the same thing with different parameters
