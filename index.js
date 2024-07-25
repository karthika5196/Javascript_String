// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Sol 1: check whether an 'input' is an array or not.
function isArray(arr) {
  console.log(Array.isArray(arr));
  //console.log(toString.call(arr) === "[Object Array]")
}
isArray([7, 8]);

//Sol 2: clone an array.
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr1, arr2);

//Sol 3: get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array
function first(arr, n) {
  if (n == undefined) {
    n = 1;
  }
  console.log(arr.slice(0, n));
}
first([7, 9, 0, -2]);

//Sol 4: get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
function last(arr, n) {
  if (n == undefined) {
    n = 1;
  }
  console.log(arr.slice(-n));
}
last([7, 9, 10, 14, 34, 56]);

//Sol 5: join all elements of the following array into a string

const arr = ['Red', 'Green', 'White', 'Black'];
console.log(arr.toString());
console.log(arr.join());
console.log(arr.join('+'));

//Sol 6: accepts a number as input and inserts dashes (-) between each even number.
let num = 257964;
let numToStr = num.toString();
let str = '';
for (let i = 0; i < numToStr.length; i++) {
  if (numToStr[i] % 2 == 0 && numToStr[i + 1] % 2 == 0) {
  }
}
