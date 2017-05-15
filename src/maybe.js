/* @flow */

/**
 * This function takes a nullable value and an error message.
 * If the value is null or undefined, it throw an error with the error message;
 * otherwise, it returns the value
 */
function fromJustNote<A>(v: ?A, errorMsg: string): A {
  if (v === null || v === undefined) {
    throw new Error(errorMsg)
  } else {
    return v
  }
}

/**
 * This function takes a default value and and nullable value.
 * If the value is null or undefined, it returns the default values;
 * otherwise, it returns the value.
 */
function fromMaybe<A>(defaultValue: A, v: ?A): A {
  return v === null || v === undefined ? defaultValue : v
}

/**
 * This functions takes a default value, a function, and a nullable value.
 * If the nullable value is null or undefined, the function returns the
 * default value. Otherwise, it applies the function to the value
 * and returns the result
 */
function maybe<A, B>(defaultValue: B, func: (x: A) => B, v: ?A): B {
  if (v === null || v === undefined) {
    return defaultValue
  } else {
    return func(v)
  }
}

export
  { fromJustNote
  , fromMaybe
  , maybe
  }
