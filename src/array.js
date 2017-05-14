/* @flow */

import { fromJustNote } from './maybe.js'

/**
 * This function returns true if the given array is empty
 */
function isEmptyArray<A>(ar: Array<A>): boolean {
  return ar.length === 0
}

/**
 * This function returns the tail of the given array when
 * it is not empty otherwise it return an empty array
 */
function tailSafe<A>(ar: Array<A>): Array<A> {
  return ar.slice(1)
}

/**
 * This function returns the tail of the given array when
 * it is not empty otherwise it returns undefined
 */
function tailMay<A>(ar: Array<A>): ?Array<A> {
  return isEmptyArray(ar) ?
    undefined :
    tailSafe(ar)
}

/**
 * This function returns the tail of the given array when
 * it is not empty otherwise it throws an error with the
 * given message
 */
function tailNote<A>(ar: Array<A>, msg: string): Array<A> {
  return fromJustNote(tailMay(ar), msg)
}

/**
 * This function returns the first element of the given array
 * when it is not empty otherwise it returns undefined
 */
function headMay<A>(ar: Array<A>): ?A {
  return ar[0]
}

/**
 * This function returns the first element of the given array
 * when it is not empty otherwise it throws an error with the
 * given message
 */
function headNote<A>(ar: Array<A>, msg: string): A {
  return fromJustNote(headMay(ar), msg)
}

/**
 * This function returns the last element of the given array
 * when it is not empty otherwise it returns undefined
 */
function lastMay<A>(ar: Array<A>): ?A {
  return ar.slice(-1)[0]
}

/**
 * This function returns the last element of the given array
 * when it is not empty otherwise it throws an error with the
 * given message
 */
function lastNote<A>(ar: Array<A>, msg: string): A {
  return fromJustNote(lastMay(ar), msg)
}

/**
 * This function returns the element of the given array
 * at the position of the given index when possible
 * otherwise it returns undefined
 */
function atMay<A>(ar: Array<A>, index: number): ?A {
  return index >= ar.length ?
    undefined :
    ar[index]
}

/**
 * This function returns the element of the given array
 * at the position of the given index when possible
 * otherwise it throws an error with the given message
 */
function atNote<A>(ar: Array<A>, index: number, msg: string): A {
  return fromJustNote(atMay(ar, index), msg)
}

/**
 * This function returns the given element if is exists
 * in the given array otherwise it returns undefined
 */
function findMay<A>(ar: Array<A>, elem: A): ?A {
  return ar.find(x => x === elem)
}

/**
 * This function returns the given element if is exists
 * in the given array otherwise it throws an error
 * with the given message
 */
function findNote<A>(ar: Array<A>, elem: A, msg: string): A {
  return fromJustNote(findMay(ar, elem), msg)
}

/**
 * This function returns the index of the given element if is exists
 * in the given array otherwise it return undefined
 */
function findIndexMay<A>(ar: Array<A>, elem: A): ?number {
  const resIndex = ar.findIndex(x => x === elem)
  return resIndex === -1 ?
    undefined :
    resIndex
}

/**
 * This function returns the index of the given element if is exists
 * in the given array otherwise it throws an error
 * with the given message
 */
function findIndexNote<A>(ar: Array<A>, elem: A, msg: string): number {
  return fromJustNote(findIndexMay(ar, elem), msg)
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
  // TODO
  // , findByMay
  // , findByNote
  // , findIndexByMay
  // , findIndexByNote
  }
