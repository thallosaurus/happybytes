# happybytes

## How to use?

Install it like any other nodeJS module:

``npm i happybytes``

Or include it in your Website:

``<script src="happybytes.js"></script>``

If space is critical, you can also use unpkg.com to include the script in your website:
``<script src="https://unpkg.com/happybytes/happybytes.js"></script>``


Import the Module like this in your NodeJS project (Only needed, if you use it with NodeJS):

``const happybytes = require("happybytes"); ``

and use it like this:

``> happybytes(493764)``

``< 493.76KB ``

Default mode defines a Decimal Base. If you want to use the binary base, just pass a ``true`` as the second argument

``> happybytes(493764, true);``

``< 482.19KiB``

## Cross Platform Compatibility

Since this small module was designed for use everywhere, you can use it anywhere you can use ES6 JavaScript. Syntax stays the same everywhere.

## CI

The CI will push to NPM if the commit starts with \[RELEASE\]