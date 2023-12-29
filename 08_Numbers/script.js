let x;

const num = new Number(5.4527);

x = num.toString(); //

x = num.toString().length; //

x = num.toFixed(2); //5.45

x = num.toPrecision(2); //5.5

x = num.toExponential(2); //5.00e+0

x = num.toLocaleString("en-US"); //5

x = num.valueOf();

x = Number.MAX_VALUE; // 1.7976931348623157e+308

x = Number.MIN_VALUE; // 5e-324

// console.log(num);
console.log(x);
