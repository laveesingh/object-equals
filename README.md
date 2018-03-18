object-equals
==============

Compare two javascript objects if they are equal

## Installation

### npm

`npm install object-equals`

### yarn

`yarn add object-equals`

#### Example Usage

```javascript
var equals = require('object-equals').default
var obj1 = {
  a: 1,
  c: {
    a: 11,
    c: [1, 2, 3, 4],
    d: {}
  }
}
var obj2 = {
  a: 1,
  c: {
    a: 11,
    c: [1, 2, 3, 4],
    d: {}
  }
}
var obj3 = {
  a: 1,
  c: {
    a: 11,
    c: [1, 2, 4],
    d: {}
  }
}
var ans1 = equals(obj1, obj2)
var ans2 = equals(obj1, obj3)
console.log(ans1)
console.log(ans2)

```
