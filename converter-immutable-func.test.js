const func = require('./converter-immutable-func');
let data = {
  name: 'ashkan',
  age: 28,
  skills: {
    code: ['JS', 'HTML', 'CSS'],
    music: ['kalimba', 'piano', 'clarinet'],
  },
};

test('expect ashkan to be one character longer', () => {
  const result = func(data);
  expect(data.name.length).toBeLessThan(result.name.length);
});

test('age is expected to be one unit greater', () => {
  const result = func(data);
  expect(result.age).toEqual(data.age + 1);
});

test('the original data should\'ve been remained untouched', () => {
  const result = func(data);
  expect(result).not.toEqual(data);
});

test('result should not be undefined', () => {
  const result = func(data);
  expect(result).not.toBeUndefined();
});