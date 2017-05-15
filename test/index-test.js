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

  , fromJustNote
  , maybe
  , fromMaybe
} from '../src/index.js'

import {describe, it} from 'mocha'
import {assert} from 'chai'

describe("make sure all the function are exported", () => {
  it("should contains all the function", () => {
    assert.isFunction(tailMay)
    assert.isFunction(tailNote)
    assert.isFunction(tailSafe)
    assert.isFunction(headMay)
    assert.isFunction(headNote)
    assert.isFunction(lastMay)
    assert.isFunction(lastNote)
    assert.isFunction(atMay)
    assert.isFunction(atNote)
    assert.isFunction(findMay)
    assert.isFunction(findNote)
    assert.isFunction(findIndexMay)
    assert.isFunction(findIndexNote)
    assert.isFunction(catMaybes)
    assert.isFunction(mapMaybe)

    assert.isFunction(fromJustNote)
    assert.isFunction(maybe)
    assert.isFunction(fromMaybe)
  })
})
