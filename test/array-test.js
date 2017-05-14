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
} from '../src/array.js'

import {describe, it} from 'mocha'
import {assert} from 'chai'

describe("tailMay", () => {
  it("it should return undefined when passing an empty array", () => {
    assert.isUndefined(tailMay([]))
  })

  it("it should return empty array when passing an array with one element", () => {
    assert.deepEqual(tailMay([1]), [])
  })

  it("it should return an array without the first element", () => {
    assert.deepEqual(tailMay([1, 2]), [2])
    assert.deepEqual(tailMay([[1, 2], [3, 4]]), [[3, 4]])
    assert.deepEqual(tailMay([null]), [])
    assert.deepEqual(tailMay([null, null]), [null])
    assert.deepEqual(tailMay([undefined]), [])
    assert.deepEqual(tailMay([undefined, undefined]), [undefined])
  })
})

describe("tailNote", () => {
  it("should throw an error when passing an empty array", () => {
    const msg = "Array is empty"
    assert.throws(() => tailNote([], msg), Error, msg);
  })

  it("it should return empty array when passing an array with one element", () => {
    const msg = "Impossible: Array is not empty"
    assert.deepEqual(tailNote([1], msg), [])
  })

  it("it should return an array without the first element", () => {
    const msg = "Impossible: Array is not empty"
    assert.deepEqual(tailNote([1, 2], msg), [2])
    assert.deepEqual(tailNote([[1, 2], [3, 4]], msg), [[3, 4]])
  })
})

describe("tailSafe", () => {
  it("should return empty array when passing an empty array", () => {
    assert.deepEqual(tailSafe([]), [])
  })

  it("it should return empty array when passing an array with one element", () => {
    assert.deepEqual(tailSafe([1]), [])
  })

  it("it should return an array without the first element", () => {
    assert.deepEqual(tailSafe([1, 2]), [2])
    assert.deepEqual(tailSafe([[1, 2], [3, 4]]), [[3, 4]])
  })
})

describe("headMay", () => {
  it("it should return undefined when passing an empty array", () => {
    assert.isUndefined(headMay([]))
  })

  it("it should return the first element given a non empty array", () => {
    assert.deepEqual(headMay([1, 2]), 1)
    assert.deepEqual(headMay([[1, 2], [3, 4]]), [1, 2])
    assert.isNull(headMay([null]))
    assert.isUndefined(headMay([undefined]) )
  })
})

describe("headNote", () => {
  it("should throw an error when passing an empty array", () => {
    const msg = "Array is empty"
    assert.throws(() => headNote([], msg), Error, msg);
  })

  it("it should return empty array when passing an array with one element", () => {
    const msg = "Impossible: Array is not empty"
    assert.deepEqual(headNote([1], msg), 1)
  })

  it("it should return an array without the first element", () => {
    const msg = "Impossible: Array is not empty"
    assert.deepEqual(headNote([1, 2], msg), 1)
    assert.deepEqual(headNote([[1, 2], [3, 4]], msg), [1, 2])
  })
})

describe("lastMay", () => {
  it("it should return undefined when passing an empty array", () => {
    assert.isUndefined(lastMay([]))
  })

  it("it should return the last element given a non empty array", () => {
    assert.equal(lastMay([1, 2]), 2)
    assert.deepEqual(lastMay([[1, 2], [3, 4]]), [3, 4])
    assert.isNull(lastMay([null]))
    assert.isUndefined(lastMay([undefined]))
  })
})

describe("lastNote", () => {
  it("should throw an error when passing an empty array", () => {
    const msg = "Array is empty"
    assert.throws(() => lastNote([], msg), Error, msg);
  })

  it("it should return empty array when passing an array with one element", () => {
    const msg = "Impossible: Array is not empty"
    assert.deepEqual(lastNote([1], msg), 1)
  })

  it("it should return an array without the first element", () => {
    const msg = "Impossible: Array is not empty"
    assert.deepEqual(lastNote([1, 2], msg), 2)
    assert.deepEqual(lastNote([[1, 2], [3, 4]], msg), [3, 4])
  })
})

describe("atMay", () => {
  it("it should return undefined when passing an empty array", () => {
    assert.isUndefined(atMay([], 0))
  })

  it("it should return undefined when passing an index >= to the array length", () => {
    assert.isUndefined(atMay([1], 1))
    assert.isUndefined(atMay([1, 2], 2))
  })

  it("it should return the element at the given position", () => {
    assert.equal(atMay([1, 2], 0), 1)
    assert.equal(atMay([1, 2], 1), 2)
    assert.deepEqual(atMay([[1, 2], [3, 4]], 1), [3, 4])
    assert.isNull(atMay([null], 0))
    assert.isUndefined(atMay([undefined], 0))
  })
})

describe("atNote", () => {
  it("it should throw an error when passing an empty array", () => {
    const msg = "Array is empty"
    assert.throws(() => atNote([], 0, msg), Error, msg);
  })

  it("it should throw an error when passing an index >= to the array length", () => {
    const msg = "Array is empty"
    assert.throws(() => atNote([1], 1, msg), Error, msg);
    assert.throws(() => atNote([1, 2], 2, msg), Error, msg);
  })

  it("it should throw an error when the element at index is null", () => {
    const msg = "Array is empty"
    assert.throws(() => atNote([null], 0, msg), Error, msg);
  })

  it("it should throw an error when the element at index is undefined", () => {
    const msg = "Array is empty"
    assert.throws(() => atNote([undefined], 0, msg), Error, msg);
  })

  it("it should return the element at the given position", () => {
    const msg = "Impossible: Array is not empty"
    assert.equal(atNote([1, 2], 0, msg), 1)
    assert.equal(atNote([1, 2], 1, msg), 2)
    assert.deepEqual(atNote([[1, 2], [3, 4]], 1, msg), [3, 4])
  })
})

describe("findMay", () => {
  it("it should return undefined when passing an empty array", () => {
    assert.isUndefined(findMay([], 0))
  })

  it("it should return undefined when the array doesn't contains the elem", () => {
    assert.isUndefined(findMay([1], 3))
    assert.isUndefined(findMay([[1], [2], [3]], 2))
  })

  it("it should return undefined when looking for arrays or objects", () => {
    assert.isUndefined(findMay([[1, 2], [3, 4]], [3, 4]))
    assert.isUndefined(findMay([{a: 1}, {a: 5}], {a: 5}))
  })

  it("it should return the element if it exist in the array", () => {
    assert.equal(findMay([1], 1), 1)
    assert.equal(findMay([1, 2], 2), 2)
    assert.isNull(findMay([null], null))
    assert.isUndefined(findMay([undefined], undefined))
  })
})

describe("findNote", () => {
  it("it should throw an error when passing an empty array", () => {
    const msg = "Array is empty"
    assert.throws(() => findNote([], 0, msg), Error, msg);
  })

  it("it should throw an error when the array doesn't contains the elem", () => {
    const msg = "Array is doesn't contain the element"
    assert.throws(() => findNote([1], 2, msg), Error, msg);
    assert.throws(() => findNote([1, 2], 3, msg), Error, msg);
  })

  it("it should throw an error when looking for arrays or objects", () => {
    const msg = "Value in array cannot be compared"
    assert.throws(() => findNote([[1, 2], [3, 4]], [3, 4], msg), Error, msg)
    assert.throws(() => findNote([{a: 1}, {a: 5}], {a: 5}, msg), Error, msg)
  })

  it("it should throw an error when looking for null", () => {
    const msg = "Looking for null"
    assert.throws(() => findNote([1, 2], null, msg), Error, msg);
    assert.throws(() => findNote([null], null, msg), Error, msg);
    assert.throws(() => findNote([undefined], null, msg), Error, msg);
  })

  it("it should throw an error when looking for undefined", () => {
    const msg = "Looking for undefined"
    assert.throws(() => findNote([1, 2], undefined, msg), Error, msg);
    assert.throws(() => findNote([null], undefined, msg), Error, msg);
    assert.throws(() => findNote([undefined], undefined, msg), Error, msg);
  })

  it("it should return the element if it exist in the array", () => {
    const msg = "Impossible: Value exists in the array"
    assert.equal(findNote([1], 1, msg), 1)
    assert.equal(findNote([1, 2], 2, msg), 2)
    assert.equal(findNote([1, 2, null], 2, msg), 2)
  })
})

describe("findIndexMay", () => {
  it("it should return undefined when passing an empty array", () => {
    assert.isUndefined(findIndexMay([], 0))
  })

  it("it should return undefined when the array doesn't contains the elem", () => {
    assert.isUndefined(findIndexMay([1], 3))
    assert.isUndefined(findIndexMay([[1], [2], [3]], 2))
  })

  it("it should return undefined when looking for arrays or objects", () => {
    assert.isUndefined(findIndexMay([[1, 2], [3, 4]], [3, 4]))
    assert.isUndefined(findIndexMay([{a: 1}, {a: 5}], {a: 5}))
  })

  it("it should return undefined when looking for index of null", () => {
    assert.isUndefined(findIndexMay([null], 0))
  })

  it("it should return the index of the element if it exist in the array", () => {
    assert.equal(findIndexMay([1], 1), 0)
    assert.equal(findIndexMay([1, 2], 2), 1)
    assert.isUndefined(findIndexMay([undefined], 0))
  })
})

describe("findIndexNote", () => {
  it("it should throw an error when passing an empty array", () => {
    const msg = "Array is empty"
    assert.throws(() => findIndexNote([], 0, msg), Error, msg);
  })

  it("it should throw an error when the array doesn't contains the elem", () => {
    const msg = "Array is doesn't contain the element"
    assert.throws(() => findIndexNote([1], 2, msg), Error, msg);
    assert.throws(() => findIndexNote([1, 2], 3, msg), Error, msg);
  })

  it("it should throw an error when looking for arrays or objects", () => {
    const msg = "Value in array cannot be compared"
    assert.throws(() => findIndexNote([[1, 2], [3, 4]], [3, 4], msg), Error, msg)
    assert.throws(() => findIndexNote([{a: 1}, {a: 5}], {a: 5}, msg), Error, msg)
  })

  it("it should return the element if it exist in the array", () => {
    const msg = "Impossible: Value exists in the array"
    assert.equal(findIndexNote([1], 1, msg), 0)
    assert.equal(findIndexNote([1, 2], 2, msg), 1)
    assert.equal(findIndexNote([1, 2, null], 2, msg), 1)
    assert.equal(findIndexNote([null], null, msg), 0)
    assert.equal(findIndexNote([undefined], undefined, msg), 0)
  })
})
