let arr3;
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

arr2.splice(0, 1);
arr3 = [...arr1, ...arr2];
console.log(arr3);
