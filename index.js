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
