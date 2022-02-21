
let data = {name: "ashkan", box: [23, "Reza"]};

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
// immutable
// NO clone NO mutation
let result = {};
function dateNumStrManipulator(obj) {
  // ⚠ Changing the original object passed to it ⚠
  const type = whatTypeIsIt(obj);
  if (type === 'array' || type === 'object') {
    for (const key in obj) {
      // obj[key] = dateNumStrManipulator(obj[key]);
      result[key] = dateNumStrManipulator(obj[key]);
    }
  }
  return changeItem(obj);
}

const newData = dateNumStrManipulator(data);
console.log("result: ", result);

console.log(data);
console.log(newData);
