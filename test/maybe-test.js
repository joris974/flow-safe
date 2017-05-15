/* @flow */

import
  { fromJustNote
  , fromMaybe
  , maybe
  } from '../src/maybe.js'

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

describe("fromMaybe", () => {
  it("should return the default value when value is null or undefined", () => {
    const defaultValue = 1
    assert.equal(fromMaybe(defaultValue, null), defaultValue)
    assert.equal(fromMaybe(defaultValue, undefined), defaultValue)
  })

  it("should return the value when its is not null or undefined", () => {
    assert.equal(fromMaybe(1, 0), 0)
    assert.deepEqual(fromMaybe([], [0]), [0])
  })
})

describe("maybe", () => {
  it("should return the default value when value is null or undefined", () => {
    const defaultValue = 1
    const id = x => x
    assert.equal(maybe(defaultValue, id, null), defaultValue)
    assert.equal(maybe(defaultValue, id, undefined), defaultValue)
  })

  it("should return the result of the function when value is not null or undefined", () => {
    assert.equal(maybe(1, x => x + 1, 2), 3)
    assert.deepEqual(maybe([], x => x.concat([2]), [1]), [1, 2])
  })
})
