/* let data = {name: "ashkan", item: [23, new Date(2012, 0, 3)]}; */
let data = {name: "ashkan", box: [23, "Reza"]};

function whatTypeIsIt(obj) {
  // returning the type of obj
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

function dayIncrement(date, inc = 1) {
  // Adding [inc] days to date
  const timeStamp = date.getTime();
  return new Date(timeStamp + inc * 24 * 3600 * 1000);
}

function addCharToEnd(str, index) {
  // Adding the str.charAt(index) character to the end of the str
  // if index not provided, one of the str characters will be use
  let rndIndex = Math.floor(Math.random() * str.length);
  return str + str.charAt(index ?? rndIndex).toLowerCase();
}

function changeItem(item) {
  switch (whatTypeIsIt(item)) {
    case 'date':
      return dayIncrement(item);
    case 'number':
      return item + 1;
    case 'string':
      return addCharToEnd(item);
    default:
      return item;
  }
}

function isISOstring(str) {
  return (
    str.length === 24 &&
    str.includes('T') &&
    str.includes('Z') &&
    (str.match(/-/g) || []).length == 2 &&
    (str.match(/:/g) || []).length == 2
  );
}

function objectClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function dateNumStrManipulator(obj) {
  // ⚠ Changing the original object passed to it ⚠
  const type = whatTypeIsIt(obj);
  if (type === 'array' || type === 'object') {
    for (const key in obj) {
      obj[key] = dateNumStrManipulator(obj[key]);
    }
  }

  if (type !== 'number' && isISOstring(obj)) obj = new Date(obj);

  return changeItem(obj);
}

const newData = dateNumStrManipulator(objectClone(data));

console.log(data);
console.log(newData);
