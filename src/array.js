/* @flow */

import { fromJustNote } from './maybe.js'

/**
 * This function takes an array and returns true if it is empty
 */
function isEmptyArray<A>(xs: Array<A>): boolean {
  return xs.length === 0
}

/**
 * This function takes an array and returns the its tail
 */
function tailSafe<A>(xs: Array<A>): Array<A> {
  return xs.slice(1)
}

/**
 * This function takes an array.
 * If the array is empty it returns undefined;
 * otherwise it returns its tails
 */
function tailMay<A>(xs: Array<A>): ?Array<A> {
  return isEmptyArray(xs) ?
    undefined :
    tailSafe(xs)
}

/**
 * This function takes an array and an error message.
 * If the array is empty it throws an error with the error message;
 * otherwise it returns the tail of the array
 */
function tailNote<A>(xs: Array<A>, errorMsg: string): Array<A> {
  return fromJustNote(tailMay(xs), errorMsg)
}

/**
 * This function takes an array and returns the first element
 */
function headMay<A>(xs: Array<A>): ?A {
  return xs[0]
}

/**
 * This function takes an array and an error message.
 * If the array is empty it throws an error with the error message;
 * otherwise it returns the first element of the array
 */
function headNote<A>(xs: Array<A>, errorMsg: string): A {
  return fromJustNote(headMay(xs), errorMsg)
}

/**
 * This function takes an array and return the last element.
 */
function lastMay<A>(xs: Array<A>): ?A {
  return xs.slice(-1)[0]
}

/**
 * This function takes an array and an error message.
 * If the array is empty it throws an error with the error message;
 * otherwise it returns the last element of the array
 */
function lastNote<A>(xs: Array<A>, errorMsg: string): A {
  return fromJustNote(lastMay(xs), errorMsg)
}

/**
 * This function takes an array and an index
 * If the index doesn't exist in the array it returns undefined;
 * otherwise it returns the element of the array at the index
 */
function atMay<A>(xs: Array<A>, index: number): ?A {
  return index >= xs.length ?
    undefined :
    xs[index]
}

/**
 * This function takes an array, an index and an error message.
 * If the index exist in the array it returns the element of the
 * array at the index;
 * otherwise it throws an error with the error message
 */
function atNote<A>(xs: Array<A>, index: number, errorMsg: string): A {
  return fromJustNote(atMay(xs, index), errorMsg)
}

/**
 * This function takes an array and a value.
 * If the value exist in the array it returns the value;
 * otherwise it returns undefined
 */
function findMay<A>(xs: Array<A>, elem: A): ?A {
  return xs.find(x => x === elem)
}

/**
 * This function takes an array, a value and an error message.
 * If the value exist in the array it returns the value;
 * otherwise it throws an error with the error message
 */
function findNote<A>(xs: Array<A>, elem: A, errorMsg: string): A {
  return fromJustNote(findMay(xs, elem), errorMsg)
}

/**
 * This function takes an array and a value.
 * If the value exist in the array it returns its index in the array;
 * otherwise it returns undefined.
 */
function findIndexMay<A>(xs: Array<A>, elem: A): ?number {
  const resIndex = xs.findIndex(x => x === elem)
  return resIndex === -1 ?
    undefined :
    resIndex
}

/**
 * This function takes an array, a value, and an error message.
 * If the value exist in the array it returns its index in the array;
 * otherwise it throws an error with the error message;
 */
function findIndexNote<A>(xs: Array<A>, elem: A, errorMsg: string): number {
  return fromJustNote(findIndexMay(xs, elem), errorMsg)
}

/**
 * This function takes an array of nullable values and returns a new array
 * containing all the non null or undefined values in the array
 */
function catMaybes<A>(xs: Array<A>): Array<A> {
  return xs.filter(x => x !== null && x !== undefined)
}

/**
 * This function is a version of map which can throw out elements.
 * It takes a function, that takes a value and return a nullable result,
 * and an array.
 * It returns an array of result of the function applied to each element of the
 * array without any nullable result returned by the function
 */
function mapMaybe<A, B>(func: (a: A) => B, xs: Array<A>): Array<B> {
  return catMaybes(xs.map(func))
}

export
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
  }
