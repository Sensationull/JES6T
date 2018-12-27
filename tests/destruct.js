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

/*
Now lets do some array destructuring
*/

/*
The way that Array destructuring works is by assigning a variable to the array in the order in which it was given. 

So it used to look something like:

var original = ['apple', 'banana', 'orange', 'peach'];

var apple = original[0];
var banana = original[1];
var orange = original[2];
var peach = original[3];
*/

// Now it looks something more like this.

let original = ['apple', 'banana', 'orange', 'peach'];

let [apple, banana, orange, peach] = original;

const destructArr = ([apple, banana, orange, peach]) => 'These are the items in the array: ' + apple + ' ' + banana + ' ' + orange + ' ' + peach; 

// console.log(destructArr(original));

module.exports = {
  composer,
  returnProperty,
  destructObj,
  destructArr,
  original
};
