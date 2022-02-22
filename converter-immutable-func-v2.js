let data = {
  name: 'ashkan',
  skills: {
    code: ['JS', 'HTML', 'CSS'],
    music: ['kalimba', 'piano', 'clarinet'],
  },
};
// let data = { name: 'ashkan', info: { age: 23, father: 'Reza', info: { age: 47, father: 'Sezar' }} };

function whatTypeIsIt(obj) {
  // returning the type of obj
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

function changeItem(item) {
  switch (whatTypeIsIt(item)) {
    case 'number':
      return item + 1;
    case 'string':
      return item + '-zZz';
    default:
      return item;
  }
}

console.log('Before working on data 👇🏻');
console.log(data);

function transform(obj, newObj = {}) {
  // Changing the object passed to it

  for (const key in obj) {
    const valueType = whatTypeIsIt(obj[key]);
    // checking type of the obj[key] which might be either 'object' or 'array'

    newObj[key] =
      valueType === 'object'
        ? transform(obj[key])
        : valueType === 'array'
        ? obj[key].map((item) => changeItem(item))
        : changeItem(obj[key]);
  }

  return newObj;
}

let newData = {};
transform(data, newData);

console.log('After working on data 👇🏻');
console.log(data);

console.log('New data 👇🏻');
console.log(newData);
