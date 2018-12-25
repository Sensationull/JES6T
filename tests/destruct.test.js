const destruct = require('./destruct.js');

let testComposer = {
  first: 'Franz',
  last: 'Liszt',
  best: 'Hungarian Rhapsody No.2'
};

var { first, last, best } = testComposer;


test('should return the input name', () => {
  expect(destruct.returnProperty(first)).toBe('Franz');
});

test('should be able to assign values to given variables', () => {
  expect(last).toBe('Liszt');
  expect(best).toBe('Hungarian Rhapsody No.2');
});

test('should be able to pass destructured values from objects into functions', () => {
  expect(destruct.destructObj(destruct.composer)).toBe('Pytor Ilyich Tchaikovsky composed the Waltz Of The Flowers');
});