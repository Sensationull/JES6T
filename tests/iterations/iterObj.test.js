const iterObj = require('./iterObj.js');

let object = {
  song: 'The Red Blouse',
  artist: 'Antonio Carlos Jobim',
  playCount: 54688000,
  dateAdded: '2002-08-12'
};

test('should exist', () => {
  expect(iterObj.everyProp()).toBeDefined();
});

test('should iterate through the object', () => {
  expect(iterObj.everyVal(object)).toEqual(['The Red Blouse', 'Antonio Carlos Jobim', 54688000, '2002-08-12']);
  expect(iterObj.everyProp(object)).toEqual(['song', 'artist', 'playCount', 'dateAdded']);
});