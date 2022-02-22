const func = require('./converter-imutable-func');
let data = {
  name: 'ashkan',
  skils: {
    code: ['JS', 'HTML', 'CSS'],
    music: ['kalimba', 'piano', 'clarinet'],
  },
};
test('expect ashkan to be one character longer', () => {
  const result = func(data);
  expect(data.name.length).toBeLessThan(result.name.length);
});