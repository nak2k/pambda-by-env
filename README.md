# pambda-by-env

[Pambda](https://github.com/pambda/pambda) switching by env.

## Installation

```
npm i pambda-by-env -S
```

## Usage

``` javascript
import { compose, createLambda } from 'pambda';
import { env } from 'pambda-by-env';

export const handler = createLambda(
  compose(
    env('DEBUG', next => (event, context, callback) => {
      // Do something for debugging.
    })
  )
);
```

## env(name, truePambda, falsePambda)

- `name`
    - A name of environment variable for switching.
- `truePambda`
    - A pambda when an environment variable is true.
    - If this argument is an object, a pambda of the property corresponding to the environment variable is called.
- `falsePambda`
    - A pambda when an environment variable is false.

Undefined, emptry string, 'no' and 'false' are evaluated as `false`.

## License

MIT
