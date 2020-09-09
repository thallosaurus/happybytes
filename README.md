# happybytes

## How to use?

Install it like any other nodeJS module:
``npm i happybytes``

Import the Module like this in your NodeJS project:

``const happybytes = require("happybytes"); ``

and use it like this:

``> happybytes(493764)``

``< 493.76KB ``

Default mode defines a Decimal Base. If you want to use the binary base, just pass a ``true`` as the second argument

``> happybytes(493764, true);``

``< 482.19KiB``
