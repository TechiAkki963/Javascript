// Break

for (let i = 0; i < 20; i++) {
  if (i === 15) {
    console.log(`Breakkkinnnnnng......`);
    break;
  }
  console.log(i);
}

// script.js:8 0
// script.js:8 1
// script.js:8 2
// script.js:8 3
// script.js:8 4
// script.js:8 5
// script.js:8 6
// script.js:8 7
// script.js:8 8
// script.js:8 9
// script.js:8 10
// script.js:8 11
// script.js:8 12
// script.js:8 13
// script.js:8 14
// script.js:5 Breakkkinnnnnng......
// content.js:1 Content Loaded

for (let j = 0; j < 21; j++) {
  if (j === 13) {
    console.log(`Skip 13`);
    continue;
  }
  console.log(j);
}

// script.js:34 0
// script.js:34 1
// script.js:34 2
// script.js:34 3
// script.js:34 4
// script.js:34 5
// script.js:34 6
// script.js:34 7
// script.js:34 8
// script.js:34 9
// script.js:34 10
// script.js:34 11
// script.js:34 12
// script.js:31 Skip 13
// script.js:34 14
// script.js:34 15
// script.js:34 16
// script.js:34 17
// script.js:34 18
// script.js:34 19
// script.js:34 20
