object-equals
==============

Deep compare two objects to check if they are equal

[![Build Status](https://travis-ci.org/laveesingh/object-equals.svg?branch=master)](https://travis-ci.org/laveesingh/object-equals)

## Installation

### npm

`npm install object-equals`

### yarn

`yarn add object-equals`

#### Example Usage

```javascript
import { objectEquals } from 'object-equals'
// Or
// import objectEquals from 'object-equals'
// Or
// var { objectEquals } = require('object-equals')

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
var ans1 = objectEquals(obj1, obj2)
var ans2 = objectEquals(obj1, obj3)
console.log(ans1) // true
console.log(ans2) // false

```
