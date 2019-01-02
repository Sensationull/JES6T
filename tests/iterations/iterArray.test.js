const arrIterate = require('./iterArray.js');

test('should exist', () => {
  expect(arrIterate.map).toBeDefined();
});

test('should iterate through every item in an array', () => {
  expect(arrIterate.map([67, 12, 43, 'hello'])).toEqual([67, 12, 43, 'hello']);
});