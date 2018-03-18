object-equals
==============

Deep compare two objects to check if they are equal

[![Build Status](https://travis-ci.org/laveesingh/object-equals.svg?branch=master)](https://travis-ci.org/laveesingh/object-equals)

## Installation

### npm

`npm install object-equals`

### yarn

`yarn add object-equals`

## Example Usage

```javascript
import { objectEquals } from 'object-equals'
// Or
// import objectEquals from 'object-equals'
// Or
// var { objectEquals } = require('object-equals')

const obj1 = {
  a: 1,
  c: {
    a: 11,
    d: {}
  }
}
const obj2 = {
  a: 1,
  c: {
    a: 11,
    d: {}
  }
}
expect(objectEquals(obj1, obj2)).toEqual(true)

```

## Options

#### depth
  - Level of deep comparison, after which no deep comparison is done
```javascript
  const obj1 = {
    a: 1,
    b: {
      c: '2'
    }
  }
  const obj2 = {
    a: 1,
    b: {
      c: '3'
    }
  }
  expect(objectEquals(obj1, obj2)).toEqual(false)
  expect(objectEquals(obj1, obj2, {depth: 1})).toEqual(true)
  expect(objectEquals(obj1, obj2, {depth: 2})).toEqual(false)
```

#### keysOnly
  - if true, only keys will be compared irrespective of the values
```javascript
  const obj1 = {
    a: 1,
    b: {
      c: '2'
    }
  }
  const obj2 = {
    a: 1,
    b: {
      c: '3'
    }
  }
  expect(objectEquals(obj1, obj2)).toEqual(false)
  expect(objectEquals(obj1, obj2, {keysOnly: true})).toEqual(true)
```

#### valuesOnly
  - if true, only values will be compared irrespective of the keys
```javascript
  const obj1 = {
    a: 1,
    b: {
      c: '2'
    }
  }
  const obj2 = {
    aaa: 1,
    bbbb: {
      cccc: '2'
    }
  }
  expect(objectEquals(obj1, obj2)).toEqual(false)
  expect(objectEquals(obj1, obj2, {valuesOnly: true})).toEqual(true)
```
