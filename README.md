## img

Create an IMG element with a callback function

## Install

```bash
$ npm install img
```

## Usage

```js
var img = require('img')

var src = 'https://avatars2.githubusercontent.com/u/7551498'

var el = img(src, function (error, _el) {
  // image is loaded

  error
  // => undefined

  el == _el
  // => true

  document.body.appendChild(el)
})
```

Need to set timeout?

```js
var img = require('img')
var timeout = require('callback-timeout')

img('doesnt-exist.gif', timeout(function (error, el) {
  error.message
  // => "Timeout"

}, 2000))
```

See `test.js` for more info.
