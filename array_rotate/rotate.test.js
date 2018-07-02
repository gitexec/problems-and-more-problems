const rotate = require('./rotate');

test('Given `[1, 2, 3]` and `n = 1`, you should return `[3, 1, 2]`', () => {
  expect(rotate([1,2,3], 1)).toEqual([3, 1, 2]);
});