/* 
If you need to reference the actual documentation here's the link via Dec 2018
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/


// This is just a standard ES5 function
// TODO: fix eslint to allow for es5 notation as well
function eSFive (number) {
 return number;
};

/* 
This is a standard ES6 function
note that it is written as a function expression and uses a 'fat arrow'
keep in mind:
'fat arrows' === '=>'
greater than === '>='
*/
const eSSix = (number) => {
  return number;
};

/*
Arrow functions with one parameter do not require that there are parens around the parameter
*/
const noParens = string => {
  return string;
};

/*
Because developers are trying to be more efficient (or lazy), ES6 adopted the ability to omit the curly braces ({}), and the return keyword if the function body contains one expression

keep in mind:
no parens,
no return keyword,
and no curly braces.
just a fat arrow and semicolon for style.
*/
const noCurlies = string => string;

/*
This applies to your HIGHER ORDER FUNCTIONS too. (I feel like the shoutcaps are required.)

You'll start to discover that in more complex situations that code readability for those who are not fluent in JS goes down when you go in on the syntatic sugar when it comes to ES6 features, so you'll get to choose if you want to torture them with super clean, but not easy to read code, or make it less clean but highly followable. You're basically a demigod. 

*/

const higherOrderFuncs = (array) => {
  return array.map(item => item + 100);
};
// ˆnot as clean, but I can see that the mapped changes to the original array are being explicity returned to this function.ˆ

const cleanerHigherOrderFuncs = array => array.map(item => item + 100);
// ˆso clean, sleek, and sexy. Amirite???ˆ

module.exports = {
  eSFive,
  eSSix,
  noParens,
  noCurlies,
  higherOrderFuncs,
  cleanerHigherOrderFuncs
};
