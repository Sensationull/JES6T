const destruct = require('./destruct.js');

test('should return the name', () => {
  expect(destruct.holder('FILL~ME~IN')).toBe('FILL~ME~IN');
});