/* @flow */

import
  { fromJustNote
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
