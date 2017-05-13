/* @flow */

import
  { fromJustNote
  , tailMay
  , tailNote
  , tailSafe
  , headMay
  , headNote
  , lastMay
  , lastNote
  , atMay
  , atNote
  } from '../src/index.js'

import {describe, it} from 'mocha'
import {assert} from 'chai'

describe("fromJustNote", () => {
  it("should return the value when it's not null", () => {
    const msg = "Impossible"
    assert.strictEqual(fromJustNote("", msg), "")
    assert.strictEqual(fromJustNote("a", msg), "a")
    assert.strictEqual(fromJustNote(0, msg), 0)

    assert.isNaN(fromJustNote(NaN, msg))

    assert.deepEqual(fromJustNote([], msg), [])
    assert.deepEqual(fromJustNote([1], msg), [1])

    assert.deepEqual(fromJustNote({}, msg), {})
    assert.deepEqual(fromJustNote({a: 1}, msg), {a: 1})
  })

  it("should throw an error when the value is null", () => {
    const msg = "Value is not set"
    assert.throws(() => fromJustNote(null, msg), Error, msg);
  })

  it("should throw an error when the value is undefined", () => {
    const msg = "Value is not set"
    assert.throws(() => fromJustNote(undefined, msg), Error, msg);
  })
})

describe("tailMay", () => {
  it("it should return null when passing an empty array", () => {
    assert.isNull(tailMay([]))
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
  it("it should return null when passing an empty array", () => {
    assert.isNull(headMay([]))
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
  it("it should return null when passing an empty array", () => {
    assert.isNull(lastMay([]))
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
  it("it should return null when passing an empty array", () => {
    assert.isNull(atMay([], 0))
  })

  it("it should return null when passing an index >= to the array length", () => {
    assert.isNull(atMay([1], 1))
    assert.isNull(atMay([1, 2], 2))
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
