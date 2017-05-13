/* @flow */

/**
 * This function returns true if the given array is empty
 */
function isEmptyArray<A>(ar: Array<A>): boolean {
  return ar.length === 0
}

/**
 * This function returns the tail of the given array
 */
function unsafeTail<A>(ar: Array<A>): Array<A> {
  return ar.slice(1)
}

/**
 * This function returns the first element of the given array
 */
function unsafeHead<A>(ar: Array<A>): A {
  return ar[0]
}

/**
 * This function returns the last element of the given array
 */
function unsafeLast<A>(ar: Array<A>): A {
  return ar.slice(-1)[0]
}

/**
 * This function returns the value of the given argument if it
 * is not null or undefined otherwise it throws an Error
 * with the given message
 */
function fromJustNote<A>(a: ?A, msg: string): A {
  if (a === null || a === undefined) {
    throw new Error(msg)
  } else {
    return a
  }
}

/**
 * This function returns the tail of the given array when
 * it is not empty otherwise it returns null
 */
function tailMay<A>(ar: Array<A>): ?Array<A> {
  return isEmptyArray(ar) ?
    null :
    unsafeTail(ar)
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
 * This function returns the tail of the given array when
 * it is not empty otherwise it return an empty array
 */
function tailSafe<A>(ar: Array<A>): Array<A> {
  return isEmptyArray(ar) ?
    [] :
    unsafeTail(ar)
}

/**
 * This function returns the first element of the given array
 * when it is not empty otherwise it returns null
 */
function headMay<A>(ar: Array<A>): ?A {
  return isEmptyArray(ar) ?
    null :
    unsafeHead(ar)
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
 * when it is not empty otherwise it returns null
 */
function lastMay<A>(ar: Array<A>): ?A {
  return isEmptyArray(ar) ?
    null :
    unsafeLast(ar)
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
 * otherwise it returns null
 */
function atMay<A>(ar: Array<A>, index: number): ?A {
  return isEmptyArray(ar) || index >= ar.length ?
    null :
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

// TODO
//
// lookupJustNote
// findJustNote
//
// elemIndexJustNote
// findIndexJustNote
//
// nextMay
// nextNote
// prevMay
// prevNote


export
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
  }
