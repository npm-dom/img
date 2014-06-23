## img

Create an IMG element

## Install

```bash
$ npm install img
```

## Usage

A basic usage of it would be:

```js
var img = require('img')
var el = img('https://avatars2.githubusercontent.com/u/7551498')
document.body.appendChild(el)
```

You can also pass a callback, it'll be called when the img is load or failed to load:

```js
img('https://avatars2.githubusercontent.com/u/7551498', function (error, el) {
  // image is loaded

  error
  // => undefined

  document.body.appendChild(el)
})
```

To set timeout:

```js
var img = require('img')
var timeout = require('callback-timeout')

img('doesnt-exist.gif', timeout(function (error, el) {
  error.message
  // => "Timeout"

}, 2000))
```

See `test.js` for more info.
