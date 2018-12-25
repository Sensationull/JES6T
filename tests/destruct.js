/* Object and Array Destructuring will go here

READ DA DOCS ~ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

*/

// Typically we see objects as literals, like: 
var composer = {
  first: 'Pytor Ilyich',
  last: 'Tchaikovsky',
  bestSong: 'Waltz Of The Flowers'
};
/*
and so we'd access the specifics via referencing the object's name and the property
var first = composer.first = 'Pytor Ilyich';
var last = composer.last = 'Tchaikovsky';
var bestSong = composer.bestSong = 'Waltz Of The Flowers';

but now, ES6 allows for Object Destructuring which allows us to assign values to given variables
*/
// var { first, last, bestSong } = composer;

const returnProperty = name => name;

const destructObj = ({ first, last, bestSong }) => {
  return first + ' ' + last + ' composed the ' + bestSong;
};

module.exports = {
  composer,
  returnProperty,
  destructObj
};
