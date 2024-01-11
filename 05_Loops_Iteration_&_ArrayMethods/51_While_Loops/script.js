//While

// let [initialize];
//
// while (condition){
//   statement
//  [increment]
// }

//

// let i = 0;

// while (i <= 20) {
//   console.log("Number" + i);
//   i++;
// }

//

//Loop over Array
// let j = 0;
// const arr = [10, 20, 30, 40, 50];

// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

//

//Nesting While Loops
let i = 0;
let j = 1;

while (i <= 5) {
  console.log("Number" + i);
  while (j <= 5) {
    console.log(`${i}*${j}=${i * j}`);
    j++;
    break;
  }
}
