import objectEquals from '../src/index'

describe('Testing options for object-equals', () => {
  test('Test5: depth', () => {
    const object1 = {
      a: 1,
      b: 'astring',
      c: {
        aa: 11,
        bb: 'aastring',
        cc: {
          aaa: 111,
          bbb: 'aaastring',
          ccc: { a4: 'nothing' }
        }
      },
      d: [
        1, 2, 3, {
          a: 1
        }
      ]
    }
    const object2 = {
      a: 1,
      b: 'astring',
      c: {
        aa: 11,
        bb: 'aastring',
        cc: {
          aaa: 111,
          bbb: 'aaastring',
          ccc: { a4: 'something' }
        }
      },
      d: [
        1, 2, 3, {
          a: 1
        }
      ]
    }
    expect(objectEquals(object1, object2, {depth: 1})).toEqual(true)
    expect(objectEquals(object1, object2, {depth: 2})).toEqual(true)
    expect(objectEquals(object1, object2, {depth: 3})).toEqual(true)
    expect(objectEquals(object1, object2, {depth: 4})).toEqual(false)
    expect(objectEquals(object1, object2, {depth: 5})).toEqual(false)
  })

  test('Test6: keysOnly', () => {
    const object1 = {
      a: 1,
      b: 'astring',
      c: {
        aa: 11,
        bb: 'aastring',
        cc: {
          aaa: 111,
          bbb: 'aaastring',
          ccc: { a4: 'something' }
        }
      },
      d: [
        1, 2, 3, {
          a: 1
        }
      ]
    }
    const object2 = {
      a: 2,
      b: 'bstring',
      c: {
        aa: 11,
        bb: 'aastring',
        cc: {
          aaa: 112,
          bbb: '',
          ccc: []
        }
      },
      d: []
    }
    expect(objectEquals(object1, object2)).toEqual(false)
    expect(objectEquals(object1, object2, {keysOnly: true}))
      .toEqual(true)
    expect(objectEquals(object1, object2, {valuesOnly: true}))
      .toEqual(false)
  })

  test('Test7: valuesOnly', () => {
    const object1 = {
      a: 1,
      b: 'astring',
      c: {
        aa: 11,
        bb: 'aastring',
        cc: {
          aaa: 111,
          bbb: 'aaastring',
          ccc: { a4: 'nothing' }
        }
      },
      d: [
        1, 2, 3, {
          a: 1
        }
      ]
    }
    const object2 = {
      fake: 1,
      b: 'astring',
      carbon: {
        aa: 11,
        bob: 'aastring',
        cocky: {
          aaa: 111,
          bbb: 'aaastring',
          ccc4: { a5: 'nothing' }
        }
      },
      d: [
        1, 2, 3, {
          b: 1
        }
      ]
    }
    expect(objectEquals(object1, object2)).toEqual(false)
    expect(objectEquals(object1, object2, {valuesOnly: true})).toEqual(true)
    expect(objectEquals(object1, object2, {keysOnly: true})).toEqual(false)
  })
})
