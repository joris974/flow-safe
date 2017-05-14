/* @flow */

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

export
  { fromJustNote
  }
