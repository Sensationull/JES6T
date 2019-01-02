/*
READ DA DOCS
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

there's also another for loop called a 'for...in' loop
it allows you to iterate through objects.
*/

let object = {
  song: 'Dark Red',
  artist: 'Steve Lacy',
  playCount: 54688,
  dateAdded: '2018-08-12'
};

const everyVal = obj => {
  let arr = [];
  for (let prop in obj) {
    arr.push(obj[prop]);
  }
  return arr;
};

const everyProp = obj => {
  let arr = [];
  for (let prop in obj) {
    arr.push(prop);
  }
  return arr;
};

module.exports = {
  everyProp,
  everyVal
};