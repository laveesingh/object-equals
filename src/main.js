
export const objectEquals = (object1, object2) => {
  if (object1 === null || object2 === null ||
    typeof object1 !== 'object' || typeof object2 !== 'object') {
    return object1 === object2
  }
  let entries1 = Object.entries(object1)
  let entries2 = Object.entries(object2)
  if (entries1.length !== entries2.length) { return false }
  for (let index = 0; index < entries1.length; index += 1) {
    if (entries1[index][0] !== entries2[index][0]) { return false }
    let valueComparison = objectEquals(entries1[index][1],
      entries2[index][1])
    if (!valueComparison) { return false }
  }
  return true
}
