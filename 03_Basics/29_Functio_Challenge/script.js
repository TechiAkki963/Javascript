function getCelsius(f) {
  const temp = ((f - 32) * 5) / 9;
  return temp;
}
console.log(getCelsius(32)); // 0

//or

// const getCelsius = (f) => ((f - 32) * 5) / 9;
console.log(`The temp is ${getCelsius(32)} c`); //The temp is 0 c

// Challenge - 2
// finding the min and max
/*
function minMax(...arr) {
  const minArr = Math.min(...arr);
  const maxArr = Math.max(...arr);

  return { minArr, maxArr };
}
console.log(minMax(1, 2, 3, 4, 5, 6));
*/

//or

const minMax = function (...arr) {
  const minArr = Math.min(...arr);
  const maxArr = Math.max(...arr);

  return {
    minArr,
    maxArr,
  };
};

console.log(minMax(1, 2, 3, 4, 5, 6)); //{minArr: 1, maxArr: 6}maxArr: 6minArr: 1[[Prototype]]: Object

// Challenge 3

((length, width) => {
  const area = length * width;

  const result = `The area of the rectangle with ${length} and ${width} is ${area}.`;
  console.log(result); //The area of the rectangle with 5 and 11 is 55.
})(5, 11);
