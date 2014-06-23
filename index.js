module.exports = img;

function img (src, callback) {
  var el = document.createElement('img');
  var locked;

  el.onload = function () {
    if (locked) return;
    locked = true;

    callback && callback(undefined, el);
  };

  el.onerror = function () {
    if (locked) return;
    locked = true;

    callback && callback(new Error('Unable to load "' + src + '"'));
  };

  el.src = src;

  return el;
}
