// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Sol 1: find the sign of the product of three numbers.
let num = 3 * 4 * 8;
let sign = Math.sign(num) == -1 ? 'the sign is -' : 'the sign is +';
console.log(sign);

//Sol 2: sort three numbers
let numbers = [3, -7, 100];
console.log(
  numbers.sort(function (num1, num2) {
    return num1 - num2;
  })
);

//Sol 3: loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen
function checkOddEven(n) {
  let text = '';
  for (let i = 0; i <= n; i++) {
    if (i === 0 || i % 2 === 0) {
      text += i + ' ' + 'even\n';
    } else {
      text += i + ' ' + 'odd\n ';
    }
  }
  return text;
}
console.log(checkOddEven(10));

//Sol 4:  iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".
function fizzBuzz(n) {
  let str = '';
  for (let i = 1; i <= n; i++) {
    str +=
      i % 3 == 0 && i % 5 == 0
        ? ' FizzBuzz\n'
        : i % 3 == 0
        ? ' Fizz\n'
        : i % 5 == 0
        ? ' Buzz\n'
        : i + '\n';
  }
  return str;
}
console.log(fizzBuzz(18));

//Sol 5: "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)". Write a JavaScript program to find and print the first 5 happy numbers.

function isHappyNumber(num) {}
console.log(isHappyNumber(49));
