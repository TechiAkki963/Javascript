const date = new Date(30, 11, 2024, 6, 11, 11);
console.log(date); // Mon Jun 15 1936 11:11:11 GMT+0530 (India Standard Time)

const hours = date.getHours();
console.log(hours); //11

if (hours < 12) {
  console.log(`Good Morning`);
} else if (hours < 18) {
  console.log(`Good Afternoon`);
} else {
  console.log(`Good Night`);
}

// Nested If
if (hours < 12) {
  console.log(`Good Morning`);
  if (hours === 6) {
    console.log(`Wake Up`);
  }
} else if (hours < 18) {
  console.log(`Good Afternoon`);
} else {
  console.log(`Good Night`);
  if (hours >= 20) {
    console.log(`Go to Bed zzzzzz`);
  }
}

//  && operator -- AND OPERATOR
if (hours >= 7 && hours < 15) {
  console.log(`Woooooorking Hourssss`);
}

// || operator -- OR OPERATOR
if (hours === 6 || hours === 20) {
  console.log(`Brush your Teeth`);
}
