const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  console.log(`${accumulator} accumulator, ${currentValue} currentValue`);
  return accumulator + currentValue;
}, 0);
console.log(sum); //55

//ShortHand
const sum2 = numbers.reduce((acc, curV) => acc + curV, 0);

console.log(sum2); //55

//Using for loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

console.log(sum3()); //5

// real example or use case
const cart = [
  { id: 1, name: "tShirt", price: 599 },
  {
    id: 2,
    name: `shoes`,
    price: 999,
  },
  {
    id: 3,
    name: `watch`,
    price: 5000,
  },
];
const cartTotal = cart.reduce((acc, product) => {
  return acc + product.price;
}, 0);
console.log(cartTotal); //6598
