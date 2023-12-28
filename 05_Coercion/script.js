let x;

x = 5 + "5"; //Output: 55 String

x = 5 + Number("5"); //Output: 10 number

x = 5 * "5"; //Output: 25 number

x = 5 + undefined; //Output: NaN number

x = 5 + null; //Output:  5 number

x = Number(null); //Output: 0 number

x = Number(true); //Output: 1 number

x = Number(false); //Output: 0 number

x = 5 + true; //Output: 6 number

x = 5 + false; //Output: 5  number

console.log(x, typeof x);
