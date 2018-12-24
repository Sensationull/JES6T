const arrow = require('./arrows.js');

test('ES5 function', () => {
  expect(arrow.eSFive(230)).toBe(230);
});

test('ES6 Arrow function', () => {
  expect(arrow.eSSix(520)).toBe(520);
});