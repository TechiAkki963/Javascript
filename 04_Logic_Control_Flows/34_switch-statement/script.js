const d = new Date(2024, 0, 8, 18, 53, 10);
const day = d.getDay();
console.log(d); //Mon Jan 08 2024 18:53:10 GMT+0530 (India Standard Time)

const hour = d.getHours();
console.log(hour);

console.log(day); //1

switch (day) {
  case 1:
    console.log(`Its Monday`);
    break;
  case 2:
    console.log(`Its Tuesday`);
    break;

  default:
    console.log(`Its Week-Off`);
}

//Its Monday

switch (hour) {
  case hour < 12:
    console.log(`Good Morning`);
    break;
  case hour >= 18:
    console.log(`Good Afternoon`);
    break;
  default:
    console.log(`Good Night zzzzz`);
}
