import func from './converter-immutable-func-v2';
let data = {
  name: 'ashkan',
  age: 28,
  skills: {
    code: ['JS', 'HTML', 'CSS'],
    music: ['kalimba', 'piano', 'clarinet'],
  },
};

const result = func(data);

test('expect ashkan to be ashkan-zZz', () => {
  expect(result.name).toBe('ashkan-zZz');
});

test('age is expected to be one unit greater', () => {
  expect(result.age).toEqual(data.age + 1);
});

test('the original data should\'ve been remained untouched', () => {
  expect(result).not.toEqual(data);
});

test('result should not be undefined', () => {
  expect(result).not.toBeUndefined();
});