const arrow = require('./arrows.js');

test('ES5 function', () => {
  expect(arrow.eSFive(230)).toBe(230);
});

test('ES6 Arrow function', () => {
  expect(arrow.eSSix(520)).toBe(520);
});

test('ES6 Arrow function, with one parameter', () => {
  expect(arrow.noParens('Look Ma, no parens!')).toBe('Look Ma, no parens!');
});

test('ES6 Arrow function, with no curlies and one expression', () => {
  expect(arrow.noCurlies('Look Ma, no curlies!')).toBe('Look Ma, no curlies!');
});

const original = [100, 250, 400, 900];
const expected = [200, 350, 500, 1000];

/*
Had to change the matcher from toBe to toEqual due to pass-by-value vs pass-by-reference.
toBe tests exact equality,
toEqual tests values.
*/

test('ES6 HOF Arrow function, that is less clean, but readable ', () => {
  expect(arrow.higherOrderFuncs(original)).toEqual(expected);
});

test('ES6 HOF Arrow function, that is suuuuper clean', () => {
  expect(arrow.cleanerHigherOrderFuncs(original)).toEqual(expected);
});

