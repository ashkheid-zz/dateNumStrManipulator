let data = [
  2,
  'ashkan',
  99,
  [
    2,
    'ashkan',
    99,
    true,
    new Date(2014, 0, 31),
    -6.3,
    'as a man',
    new Date(2012, 0, 3),
  ],
  { number: 1372, age: { number: 'ashansn' } },
  true,
  new Date(2014, 0, 31),
  -6.3,
  'as a man',
  new Date(2012, 0, 3),
];

/* let data = {name: "ashkan", item: [23, new Date(2012, 0, 3)]}; */
/* let data = ["ashkan", [23, new Date(2012, 0, 3)]]; */

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
// NO clone NO mutation
function dateNumStrManipulator(obj) {
  // ⚠ Changing the original object passed to it ⚠
  const type = whatTypeIsIt(obj);
  if (type === 'array' || type === 'object') {
    for (const key in obj) {
      obj[key] = dateNumStrManipulator(obj[key]);
    }
  }
  return changeItem(obj);
}

const newData = dateNumStrManipulator(data);

console.log(data);
console.log(newData);
