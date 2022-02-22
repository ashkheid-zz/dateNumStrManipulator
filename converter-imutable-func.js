let data = {
  name: 'ashkan',
  age: 28,
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

function addCharToEnd(str, index) {
  // Adding the str.charAt(index) character to the end of the str
  // if index not provided, one of the str characters will be use
  let rndIndex = Math.floor(Math.random() * str.length);
  return str + str.charAt(index ?? rndIndex).toLowerCase();
}

function changeItem(item) {
  switch (whatTypeIsIt(item)) {
    case 'number':
      return item + 1;
    case 'string':
      return addCharToEnd(item);
    default:
      return item;
  }
}

console.log('Before working on data 👇🏻');
console.log(data);

// immutable
// NO clone NO mutation
function dateNumStrManipulator(obj) {
  // Changing the object passed to it

  let result = {};
  for (const key in obj) {

    const valueType = whatTypeIsIt(obj[key]);
    // checking type of the obj[key] which might be either 'object' or 'array'
    
    result[key] =
      valueType === 'object'
        ? dateNumStrManipulator(obj[key])
        : valueType === 'array'
        ? obj[key].map((item) => changeItem(item))
        : changeItem(obj[key]);
  }

  return result;
}

const newData = dateNumStrManipulator(data);

console.log('After working on data 👇🏻');
console.log(data);

console.log('New data 👇🏻');
console.log(newData);


module.exports = dateNumStrManipulator;