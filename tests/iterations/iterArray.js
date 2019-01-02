/*
READ DA DOCS
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

iteration through iterable objects can come occur through a for of loop as well.
It is very similar to a for loop.

*/
let original = [1, 2, 3, 4, 5];
const map = (array) => {
  arr = [];
  // instead of this 
  // for (var i = 0; i < array.length; i++) {
  //   arr.push(array[i]);
  // }
  // you can do this
  for (let element of array) {
    arr.push(element);
  }
  return arr;
};


module.exports = {
  map
};