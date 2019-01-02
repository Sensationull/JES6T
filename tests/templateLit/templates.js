/*
READ DA DOCS
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

The idea behind Template Literals is that it easier to embed values from variables into functions as well as extract those values and place them into strings, making what are called `template strings`. They exist to make your life easier. 

Template Literals use backticks, (``)

*/

const embedVars = (str1, str2, number) => {
  return `${str1} ${str2} ${parseInt(number)}`; 
};

console.log(embedVars('keep', 'it', '100'));

module.exports = {
  embedVars,
};



// let randomObject = {
//   Pinky: 'Pinky',
//   Brain: 'Brain',
//   oneHunnid: 100,
// };

// // let { Pinky, Brain, oneHunnid } = randomObject;


// const templates = ({ Pinky, Brain, oneHunnid }) => {
//   return Pinky + Brain + oneHunnid;
// };