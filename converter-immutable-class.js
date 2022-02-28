// let data = {
//   name: 'ashkan',
//   age: 28,
//   height: 182,
//   skills: {
//     code: ['JS', 'HTML', 'CSS'],
//     music: ['kalimba', 'piano', 'clarinet'],
//   },
// };
let data = {
  name: 'ashkan',
  other: {
    name: 'ashkan',
    other: { name: 'ashkan', family: 'fazel' },
    family: 'fazel',
  },
  family: 'fazel',
};

class Transformer {
  constructor(data) {
    this.data = data;
  }

  stringManipulation(str) {
    return str + 'Zz';
  }

  changeStrings(obj = this.data) {
    for (const key in obj) {
      if (obj[key].constructor.name === 'Object') {
        obj[key] = this.changeStrings(obj[key]);
      } else {
        obj[key] = this.stringManipulation(obj[key]);
      }
    }
    return this;
  }

  //#region DRAFT
  iterate(func, obj = this.data) {
    for (const key in obj) {
      if (obj[key].constructor.name === 'Object') {
        obj[key] = this.iterate(obj[key]);
      } else {
        obj[key] = this[func](obj[key]);
      }
    }
  }

  changeStrings2() {
    return this.iterate('stringManipulation');
  }
  //#endregion  DRAFT
}

const newData = new Transformer(data);
