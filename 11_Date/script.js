let d;

d = new Date();
console.log(d, typeof d); // Sat Dec 30 2023 17:56:32 GMT+0530 (India Standard Time) 'object'

d = d.toString(); // Sat Dec 30 2023 17:57:59 GMT+0530 (India Standard Time)

d = new Date(2024, 0, 10, 12, 30, 0); // Sun Jan 10 2021 12:30:00 GMT+0530 (India Standard Time)
//           yyyy, mm, dd, hh, mm ,s
// Here month starts from 0

d = new Date("2024-07-10T12:30:00"); //Wed Jul 10 2024 12:30:00 GMT+0530 (India Standard Time)
// by passing a string date, number of months are normal/exact starts from 1= Jan

d = new Date("07/10/2024 12:30:00"); // Wed Jul 10 2024 12:30:00 GMT+0530 (India Standard Time)

// Timestamp
// TimeStamp in Javascript is expressed in milliseconds

d = Date.now(); // 1703939820911

d = new Date("07-01-2024 12:30:00");
d = d.getTime(); // 1719817200000

d = d.valueOf(); //1719817200000

d = new Date(1719817200000); //Mon Jul 01 2024 12:30:00 GMT+0530 (India Standard Time)

//Todo: to get the timestamps in seconds
d = Math.floor(Date.now() / 1000); // 1703940177 (in seconds)

console.log(d);

//*************************************************** */
//Methods on Date object
let x;
let date = new Date();

x = date.toString(); // Sat Dec 30 2023 18:16:48 GMT+0530 (India Standard Time)

x = date.getTime(); // 1703940390847

x = date.valueOf(); // 1703940451382

x = date.getFullYear(); //2023

x = date.getMonth() + 1; // 12

x = date.getDate(); //30

x = date.getDay(); //6

x = date.getHours(); //18

x = date.getMinutes(); //21

x = date.getSeconds(); //46

x = date.getMilliseconds(); //99

x = `${date.getFullYear()}-${date.getDate()}-${date.getMonth()}`; // 2023-30-11

x = Intl.DateTimeFormat("en-US").format(date); // 12/30/2023

x = Intl.DateTimeFormat("en-UK").format(date); // 30/12/2023

x = Intl.DateTimeFormat("default").format(date); // 12/30/2023

x = Intl.DateTimeFormat("default", { month: "long" }).format(date); //December

x = date.toLocaleString("default", { month: "short" }); //Dec

/**Latest Way  */
x = date.toLocaleString("default", {
  weekend: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minutes: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
}); // December 30, 2023 at 8 AM (second: 39)

console.log(x);
