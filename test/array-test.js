/* @flow */

import
  { tailMay
  , tailNote
  , tailSafe
  , headMay
  , headNote
  , lastMay
  , lastNote
  , atMay
  , atNote
  , findMay
  , findNote
  , findIndexMay
  , findIndexNote
  , catMaybes
  , mapMaybe
} from '../src/array.js'

import {describe, it} from 'mocha'
import {assert} from 'chai'

describe("tailMay", () => {
  it("it should return undefined when passing an empty array", () => {
    assert.isUndefined(tailMay([]))
  })

  it("it should return empty array when passing an array with one element", () => {
    assert.deepEqual(tailMay([0]), [])
  })

  it("it should return an array without the first element", () => {
    assert.deepEqual(tailMay([0, 1]), [1])
    assert.deepEqual(tailMay([[0, 1], [2, 3]]), [[2, 3]])
    assert.deepEqual(tailMay([null]), [])
    assert.deepEqual(tailMay([null, null]), [null])
    assert.deepEqual(tailMay([undefined]), [])
    assert.deepEqual(tailMay([undefined, undefined]), [undefined])
  })
})

describe("tailNote", () => {

  it("should throw an error when passing an empty array", () => {
    const errorMsg = "Array is empty"
    assert.throws(() => tailNote([], errorMsg), Error, errorMsg);
  })

  it("it should return empty array when passing an array with one element", () => {
    const errorMsg = "Impossible: Array contains one element"
    assert.deepEqual(tailNote([1], errorMsg), [])
  })

  it("it should return an array without the first element", () => {
    const errorMsg = "Impossible: Array is not empty"
    assert.deepEqual(tailNote([0, 1], errorMsg), [1])
    assert.deepEqual(tailNote([[0, 1], [2, 3]], errorMsg), [[2, 3]])
  })
})

describe("tailSafe", () => {
  it("should return empty array when passing an empty array", () => {
    assert.deepEqual(tailSafe([]), [])
  })

  it("it should return empty array when passing an array with one element", () => {
    assert.deepEqual(tailSafe([0]), [])
  })

  it("it should return an array without the first element", () => {
    assert.deepEqual(tailSafe([0, 1]), [1])
    assert.deepEqual(tailSafe([[0, 1], [2, 3]]), [[2, 3]])
  })
})

describe("headMay", () => {
  it("it should return undefined when passing an empty array", () => {
    assert.isUndefined(headMay([]))
  })

  it("it should return the first element given a non empty array", () => {
    assert.deepEqual(headMay([0, 1]), 0)
    assert.deepEqual(headMay([[0, 1], [2, 3]]), [0, 1])
    assert.isNull(headMay([null]))
    assert.isUndefined(headMay([undefined]) )
  })
})

describe("headNote", () => {
  it("should throw an error when passing an empty array", () => {
    const errorMsg = "Array is empty"
    assert.throws(() => headNote([], errorMsg), Error, errorMsg);
  })

  it("it should return empty array when passing an array with one element", () => {
    const errorMsg = "Impossible: Array is not empty"
    assert.deepEqual(headNote([0], errorMsg), 0)
  })

  it("it should return an array without the first element", () => {
    const errorMsg = "Impossible: Array is not empty"
    assert.deepEqual(headNote([0, 1], errorMsg), 0)
    assert.deepEqual(headNote([[0, 1], [2, 3]], errorMsg), [0, 1])
  })
})

describe("lastMay", () => {
  it("it should return undefined when passing an empty array", () => {
    assert.isUndefined(lastMay([]))
  })

  it("it should return the last element given a non empty array", () => {
    assert.equal(lastMay([0, 1]), 1)
    assert.deepEqual(lastMay([[0, 1], [2, 3]]), [2, 3])
    assert.isNull(lastMay([null]))
    assert.isUndefined(lastMay([undefined]))
  })
})

describe("lastNote", () => {
  it("should throw an error when passing an empty array", () => {
    const errorMsg = "Array is empty"
    assert.throws(() => lastNote([], errorMsg), Error, errorMsg);
  })

  it("it should return empty array when passing an array with one element", () => {
    const errorMsg = "Impossible: Array is not empty"
    assert.deepEqual(lastNote([0], errorMsg), 0)
  })

  it("it should return an array without the first element", () => {
    const errorMsg = "Impossible: Array is not empty"
    assert.deepEqual(lastNote([0, 1], errorMsg), 1)
    assert.deepEqual(lastNote([[0, 1], [2, 3]], errorMsg), [2, 3])
  })
})

describe("atMay", () => {
  it("it should return undefined when passing an empty array", () => {
    assert.isUndefined(atMay([], 0))
  })

  it("it should return undefined when passing an index >= to the array length", () => {
    assert.isUndefined(atMay([0], 1))
    assert.isUndefined(atMay([0, 1], 2))
  })

  it("it should return the element at the given position", () => {
    assert.equal(atMay([0, 1], 0), 0)
    assert.equal(atMay([0, 1], 1), 1)
    assert.deepEqual(atMay([[0, 1], [2, 3]], 1), [2, 3])
    assert.isNull(atMay([null], 0))
    assert.isUndefined(atMay([undefined], 0))
  })
})

describe("atNote", () => {
  it("it should throw an error when passing an empty array", () => {
    const errorMsg = "Array is empty"
    assert.throws(() => atNote([], 0, errorMsg), Error, errorMsg);
  })

  it("it should throw an error when passing an index >= to the array length", () => {
    const errorMsg = "Array is shorter than index"
    assert.throws(() => atNote([0], 1, errorMsg), Error, errorMsg);
    assert.throws(() => atNote([0, 1], 2, errorMsg), Error, errorMsg);
  })

  it("it should throw an error when the element at index is null", () => {
    const errorMsg = "Index is null"
    assert.throws(() => atNote([null], 0, errorMsg), Error, errorMsg);
  })

  it("it should throw an error when the element at index is undefined", () => {
    const errorMsg = "Index is undefined"
    assert.throws(() => atNote([undefined], 0, errorMsg), Error, errorMsg);
  })

  it("it should return the element at the given position", () => {
    const errorMsg = "Impossible: Array is not empty"
    assert.equal(atNote([0, 1], 0, errorMsg), 0)
    assert.equal(atNote([0, 1], 1, errorMsg), 1)
    assert.deepEqual(atNote([[0, 1], [2, 3]], 1, errorMsg), [2, 3])
  })
})

describe("findMay", () => {
  it("it should return undefined when passing an empty array", () => {
    assert.isUndefined(findMay([], 0))
  })

  it("it should return undefined when the array doesn't contains the elem", () => {
    assert.isUndefined(findMay([0], 3))
    assert.isUndefined(findMay([[0], [1], [2]], 2))
  })

  it("it should return undefined when looking for arrays or objects", () => {
    assert.isUndefined(findMay([[0, 1], [2, 3]], [2, 3]))
    assert.isUndefined(findMay([{a: 1}, {a: 5}], {a: 5}))
  })

  it("it should return the element if it exist in the array", () => {
    assert.equal(findMay([0], 0), 0)
    assert.equal(findMay([0, 1], 1), 1)
    assert.isNull(findMay([null], null))
    assert.isUndefined(findMay([undefined], undefined))
  })
})

describe("findNote", () => {
  it("it should throw an error when passing an empty array", () => {
    const errorMsg = "Array is empty"
    assert.throws(() => findNote([], 0, errorMsg), Error, errorMsg);
  })

  it("it should throw an error when the array doesn't contains the elem", () => {
    const errorMsg = "Array is doesn't contain the element"
    assert.throws(() => findNote([0], 1, errorMsg), Error, errorMsg);
    assert.throws(() => findNote([0, 1], 2, errorMsg), Error, errorMsg);
  })

  it("it should throw an error when looking for arrays or objects", () => {
    const errorMsg = "Value in array cannot be compared"
    assert.throws(() => findNote([[0, 1], [2, 3]], [2, 3], errorMsg), Error, errorMsg)
    assert.throws(() => findNote([{a: 1}, {a: 5}], {a: 5}, errorMsg), Error, errorMsg)
  })

  it("it should throw an error when looking for null", () => {
    const errorMsg = "Looking for null"
    assert.throws(() => findNote([0, 1], null, errorMsg), Error, errorMsg);
    assert.throws(() => findNote([null], null, errorMsg), Error, errorMsg);
    assert.throws(() => findNote([undefined], null, errorMsg), Error, errorMsg);
  })

  it("it should throw an error when looking for undefined", () => {
    const errorMsg = "Looking for undefined"
    assert.throws(() => findNote([0, 1], undefined, errorMsg), Error, errorMsg);
    assert.throws(() => findNote([null], undefined, errorMsg), Error, errorMsg);
    assert.throws(() => findNote([undefined], undefined, errorMsg), Error, errorMsg);
  })

  it("it should return the element if it exist in the array", () => {
    const errorMsg = "Impossible: Value exists in the array"
    assert.equal(findNote([0], 0, errorMsg), 0)
    assert.equal(findNote([0, 1], 1, errorMsg), 1)
    assert.equal(findNote([0, 1, null], 1, errorMsg), 1)
  })
})

describe("findIndexMay", () => {
  it("it should return undefined when passing an empty array", () => {
    assert.isUndefined(findIndexMay([], 0))
  })

  it("it should return undefined when the array doesn't contains the elem", () => {
    assert.isUndefined(findIndexMay([0], 3))
    assert.isUndefined(findIndexMay([[0], [1], [2]], 2))
  })

  it("it should return undefined when looking for arrays or objects", () => {
    assert.isUndefined(findIndexMay([[0, 1], [2, 3]], [2, 3]))
    assert.isUndefined(findIndexMay([{a: 1}, {a: 5}], {a: 5}))
  })

  it("it should return undefined when looking for index of null", () => {
    assert.isUndefined(findIndexMay([null], 0))
  })

  it("it should return the index of the element if it exist in the array", () => {
    assert.equal(findIndexMay([0], 0), 0)
    assert.equal(findIndexMay([0, 1], 1), 1)
    assert.isUndefined(findIndexMay([undefined], 0))
  })
})

describe("findIndexNote", () => {
  it("it should throw an error when passing an empty array", () => {
    const errorMsg = "Array is empty"
    assert.throws(() => findIndexNote([], 0, errorMsg), Error, errorMsg);
  })

  it("it should throw an error when the array doesn't contains the elem", () => {
    const errorMsg = "Array is doesn't contain the element"
    assert.throws(() => findIndexNote([1], 2, errorMsg), Error, errorMsg);
    assert.throws(() => findIndexNote([0, 1], 3, errorMsg), Error, errorMsg);
  })

  it("it should throw an error when looking for arrays or objects", () => {
    const errorMsg = "Value in array cannot be compared"
    assert.throws(() => findIndexNote([[0, 1], [2, 3]], [2, 3], errorMsg), Error, errorMsg)
    assert.throws(() => findIndexNote([{a: 1}, {a: 5}], {a: 5}, errorMsg), Error, errorMsg)
  })

  it("it should return the element if it exist in the array", () => {
    const errorMsg = "Impossible: Value exists in the array"
    assert.equal(findIndexNote([0], 0, errorMsg), 0)
    assert.equal(findIndexNote([0, 1], 1, errorMsg), 1)
    assert.equal(findIndexNote([0, 1, null], 1, errorMsg), 1)
    assert.equal(findIndexNote([null], null, errorMsg), 0)
    assert.equal(findIndexNote([undefined], undefined, errorMsg), 0)
  })
})

describe("catMaybes", () => {
  it("it should return an empty array when passing an empty array", () => {
    assert.deepEqual(catMaybes([]), [])
  })

  it("it should return an empty array when given array full of null or full of undefined", () => {
    assert.deepEqual(catMaybes([null]), [])
    assert.deepEqual(catMaybes([null, null]), [])
    assert.deepEqual(catMaybes([undefined]), [])
    assert.deepEqual(catMaybes([undefined, undefined]), [])
  })

  it("it should return an array containing only the non null and non undefined values", () => {
    assert.deepEqual(catMaybes([1]), [1])
    assert.deepEqual(catMaybes([0, 1]), [0, 1])
    assert.deepEqual(catMaybes([null, 1]), [1])
    assert.deepEqual(catMaybes([undefined, 1]), [1])
    assert.deepEqual(catMaybes([0, null, 1]), [0, 1])
    assert.deepEqual(catMaybes([0, undefined, 1]), [0, 1])
    assert.deepEqual(catMaybes([0, 1, null]), [0, 1])
    assert.deepEqual(catMaybes([0, 1, undefined]), [0, 1])
  })
})

describe("mapMaybe", () => {
  const addIfDefined = x => x !== null && x !== undefined ? x + 1 : null

  it("it should return an empty array when passing an empty array", () => {
    assert.deepEqual(mapMaybe(addIfDefined, []), [])
  })

  it("it should return an empty array when all result are null or undefined", () => {
    assert.deepEqual(mapMaybe(addIfDefined, [null]), [])
    assert.deepEqual(mapMaybe(addIfDefined, [null, null]), [])
    assert.deepEqual(mapMaybe(addIfDefined, [undefined]), [])
    assert.deepEqual(mapMaybe(addIfDefined, [undefined, undefined]), [])
  })

  it("it should return an array containing only the non null and non undefined values", () => {
    assert.deepEqual(mapMaybe(addIfDefined, [0]), [1])
    assert.deepEqual(mapMaybe(addIfDefined, [0, 1]), [1, 2])
    assert.deepEqual(mapMaybe(addIfDefined, [null, 0]), [1])
    assert.deepEqual(mapMaybe(addIfDefined, [undefined, 0]), [1])
    assert.deepEqual(mapMaybe(addIfDefined, [0, null, 1]), [1, 2])
    assert.deepEqual(mapMaybe(addIfDefined, [0, undefined, 1]), [1, 2])
    assert.deepEqual(mapMaybe(addIfDefined, [0, 1, null]), [1, 2])
    assert.deepEqual(mapMaybe(addIfDefined, [0, 1, undefined]), [1, 2])
  })
})
