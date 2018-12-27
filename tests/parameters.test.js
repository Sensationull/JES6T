const params = require('./parameters.js');

test('should exist', () => {
  expect(params.addUpSalaries).toBeDefined();
});

test('should add up salaries correctly', () => {
  expect(params.addUpSalaries(1, 2, 3, 4, 5)).toEqual(15);
  expect(params.addUpSalaries(0, 0)).toEqual(0);
  expect(params.addUpSalaries(123, -456, 789)).toEqual(456);
});