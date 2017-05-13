# safe-js
[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

Offer a set of type-safe functions

## Install

TODO


## Usage

```js
const myArray = [1, 2]

const safeHead = headNote(myArray, "Could not find the head")
// => 1
const safeTail = tailNote(myArray, "Could not find the tail")
// => 2

const elem = atNote(myArray, 3, `Could not find element at ${3}`)
// => Error: Could not find element at 3
```

## License

MIT, see [LICENSE.md](http://github.com/joris974/safe-js/blob/master/LICENSE.md) for details.
