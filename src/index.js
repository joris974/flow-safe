/* @flow */

function isEmptyArray<A>(ar: Array<A>): boolean {
  return ar.length === 0
}

function fromJustNote<A>(a: ?A, msg: string): A {
  if (a === null || a === undefined) {
    throw new Error(msg)
  } else {
    return a
  }
}

function unsafeTail<A>(ar: Array<A>): Array<A> {
  return ar.slice(1)
}

function unsafeHead<A>(ar: Array<A>): A {
  return ar[0]
}

function unsafeLast<A>(ar: Array<A>): A {
  return ar.slice(-1)[0]
}

function tailMay<A>(ar: Array<A>): ?Array<A> {
  return isEmptyArray(ar) ?
    null :
    unsafeTail(ar)
}

function tailNote<A>(ar: Array<A>, msg: string): Array<A> {
  return fromJustNote(tailMay(ar), msg)
}

function tailSafe<A>(ar: Array<A>): Array<A> {
  return isEmptyArray(ar) ?
    [] :
    unsafeTail(ar)
}

function headMay<A>(ar: Array<A>): ?A {
  return isEmptyArray(ar) ?
    null :
    unsafeHead(ar)
}

function headNote<A>(ar: Array<A>, msg: string): A {
  return fromJustNote(headMay(ar), msg)
}

function lastMay<A>(ar: Array<A>): ?A {
  return isEmptyArray(ar) ?
    null :
    unsafeLast(ar)
}

function lastNote<A>(ar: Array<A>, msg: string): A {
  return fromJustNote(lastMay(ar), msg)
}

function atMay<A>(ar: Array<A>, index: number): ?A {
  return isEmptyArray(ar) || index >= ar.length ?
    null :
    ar[index]
}

function atNote<A>(ar: Array<A>, index: number, msg: string): A {
  return fromJustNote(atMay(ar, index), msg)
}

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
