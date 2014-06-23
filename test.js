var test = require("prova");
var img = require('./');
var logo = 'https://avatars2.githubusercontent.com/u/7551498';
var gif = 'http://azer.bike/cat1.gif';

test('returns an image element', function (t) {
  t.plan(2);

  var el = img(logo);
  document.documentElement.appendChild(el);

  var _el = document.querySelector('img');
  t.ok(_el);
  t.equal(_el.src, logo);

  el.parentNode.removeChild(el);
});

test('runs the callback when the img is loaded', function (t) {
  t.plan(4);

  img(gif, function (error, el) {
    t.error(error);

    t.notOk(document.querySelector('img'));
    document.documentElement.appendChild(el);

    var _el = document.querySelector('img');
    t.ok(_el);
    t.equal(_el.src, gif);

    el.parentNode.removeChild(el);
  });
});

test('fails to load', function (t) {
  t.plan(1);

  img('doesnt exist', function (error) {
    t.ok(error);
  });
});
