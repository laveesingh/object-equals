
export const objectEquals = (object1, object2, options={}) => {
    let currentDepth = 0
    let depth = options.depth || 100000
    let keysOnly = options.keysOnly || false
    let valuesOnly = options.valuesOnly || false
  return objectEqualsUtil(object1, object2, {
    depth, currentDepth, keysOnly, valuesOnly
  })
}

const objectEqualsUtil = (object1, object2, {
  depth, currentDepth, keysOnly, valuesOnly
}) => {
  if (!object1 || !object2 || typeof object1 !== 'object' ||
    typeof object2 !== 'object') {
    return object1 === object2
  }
  if (currentDepth >= depth) { return true }
  currentDepth += 1
  let entries1 = Object.entries(object1)
  let entries2 = Object.entries(object2)
  if (entries1.length !== entries2.length) { return false }
  for (let index = 0; index < entries1.length; index += 1) {
    if (entries1[index][0] !== entries2[index][0] &&
      !valuesOnly) { return false }
    let valueComparison = objectEqualsUtil(entries1[index][1],
      entries2[index][1], {depth, currentDepth, keysOnly, valuesOnly})
    if (!valueComparison && !keysOnly) { return false }
  }
  return true
}

