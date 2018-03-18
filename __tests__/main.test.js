import objectEquals from '../src/index'
import fbObject1 from './fb.json'
import fbObject2 from './fb2.json'

describe('Object equality test', () => {
  test('Test1', () => {
    let object1 = {
      key1: 'astring',
      key2: null,
      key3: [1, 2, 3, 4, 5, 6],
      key4: {
        key41: 'aastring',
        key42: undefined,
        key43: [7, 8, 9, 10],
        key44: {}
      }
    }
    let object2 = {
      key1: 'astring',
      key2: null,
      key3: [1, 2, 3, 4, 5, 6],
      key4: {
        key41: 'aastring',
        key42: undefined,
        key43: [7, 8, 9, 10],
        key44: {}
      }
    }
    expect(object1 === object2).toEqual(false)
    expect(objectEquals(object1, object2)).toEqual(true)
  })

  test('Test2', () => {
    let object1 = {
      key1: 'astring',
      key2: null,
      key3: [1, 2, 3, 4, 5, 6],
      key4: {
        key41: 'aastring',
        key42: undefined,
        key43: [7, 8, 9, 10],
        key44: {
        }
      }
    }
    let object2 = {
      key1: 'astring',
      key2: null,
      key3: [1, 2, 3, 4, 5, 6],
      key4: {
        key41: 'aastring',
        key42: undefined,
        key43: [7, 8, 9, 10],
        key44: {
          key441: 'empty'
        }
      }
    }
    expect(object1 === object2).toEqual(false)
    expect(objectEquals(object1, object2)).toEqual(false)
  })

  test('Test3', () => {
    let arr1 = [1, 2, 3, 4, 5]
    let arr2 = [1, 2, 3, 4, 5]
    let arr3 = [1, 2, 3, 4, 6]
    expect(objectEquals(arr1, arr2)).toEqual(true)
    expect(objectEquals(arr1, arr3)).toEqual(false)
  })

  test('Test4', () => {
    expect(fbObject1 === fbObject2).toEqual(false)
    expect(objectEquals(fbObject1, fbObject2)).toEqual(true)
    fbObject2['posts']['data'][0]['comments']['data'][0]['from']['id'] = '0'
    expect(objectEquals(fbObject1, fbObject2)).toEqual(false)
  })
})
