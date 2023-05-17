// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
//Sol 1:check whether an `input` is a string or not
function is_String(str) {
  let strType = typeof str;
  console.log(strType);
  if (strType == 'string') {
    //Object.prototype.toString.call(input) === '[object String]'
    return true;
  } else {
    return false;
  }
}
console.log(is_String('Karthika'));

//Sol 2:Check whether a string is blank or not
function is_Blank(str) {
  let strLength = str.length;
  let val = strLength === 0 ? true : false;
  return val;
}
console.log(is_Blank(''));

//Sol 3: split a string and convert it into an array of words
function string_to_Array(str) {
  let split = str.trim().split(' ');
  return split;
}
console.log(string_to_Array('Robin Fashion'));

//Sol 4: extract a specified number of characters from a string
function extractString(str, num) {
  console.log(str.slice(0, num));
}
extractString('Robinhood', 5);

//Sol 5: convert a string into abbreviated form
function abbrevated_string(str) {
  let split = str.trim().split(' ');
  let abbrStr = split[0] + ' ' + split[1].charAt(0);
  return abbrStr;
}
console.log(abbrevated_string('Rakesh Sharma'));

//sol 6: parameterize a string
function string_parameterize(str) {
  let strParam = str.trim().toLowerCase().split(' ').join('-');
  return strParam;
}
console.log(string_parameterize('Robin Singh from USA'));

//sol 7: capitalize the first letter of a string
function capitalize(str) {
  /*   let split = str.trim().split('');
  let cap = split[0].toUpperCase() + split.slice(1, split.length).join('');
  return cap; */
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('robin mastro'));

//Sol 8: capitalize_Words
function capitalize_Words(str) {
  let text = str.replace(/\w\S*/g, function (txt) {
    console.log(txt);
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
  return text;
}
console.log(capitalize_Words('js string exercises'));

//Sol 9: converts upper case letters to lower case, and lower case letters to upper case

function swapCase(str) {
  return str.replace(/([a-z]+)|([A-Z]+)/g, function (match, chr) {
    //second parameter is first matching regex group.
    console.log(match, chr);
    return chr ? match.toUpperCase() : match.toLowerCase();
  });
}
console.log(swapCase('AaBb'));

//Sol 10: string into camel case
function camelCase(str) {
  console.log(
    str.replace(/\W+(.)/g, function (match, chr) {
      console.log(match, chr);
      return chr.toUpperCase();
    })
  );
}
camelCase('Javascript exercise');

//Sol 11: uncommelize a string
function unCommalize(str, separator) {
  if (typeof separator == 'undefined') {
    separator = ' ';
  }
  var str = str.replace(/[A-Z]/g, function (letter) {
    console.log(letter);
    return separator + letter.toLowerCase();
  });
  console.log(str);
  return str.replace('/^' + separator + '/', '');
}
console.log(unCommalize('helloWorld', '_'));

//Sol 12: concatenate a given string n times
function repeat(str, n) {
  if (n == undefined) {
    n = 1;
  }
  return str.repeat(n);
}
console.log(repeat('hai', 4));

//Sol 13:  insert a string within a string at a particular position (default is 1)

function insert(str, ins_str, position) {
  if (position == undefined) {
    position = 0;
  }
  if (ins_str == undefined) {
    ins_str = ' ';
  }
  return str.slice(0, position) + ins_str + str.slice(position);
}
console.log(insert('we are doing some exercise ', 'javascript '));



