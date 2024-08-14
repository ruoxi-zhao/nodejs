const add = require('./add');

test('adds 1 + 2 to equal 3', async () => {
  expect(add(1, 2)).toStrictEqual(3);
});

test('type error', () => {
  expect(() => add('1', 2)).toThrow(Error('inputs must be numbers'));
});
