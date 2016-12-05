var slice = require('sliced')
var raf   = require('raf')

module.exports = debounce

function debounce(fn, now) {
  var args = null
  var ctx = null
  var requestId = null

  // I don't know why, but adding this
  // comment seems to stop uglify from
  // breaking this code.

  return debounced

  function debounced() {
    args = slice(arguments)
    ctx = this
    if (requestId !== null) return requestId
    if (now) fn.apply(ctx, args)
    requestId = raf(next)
    return requestId
  }

  function next() {
    if (!now) fn.apply(ctx, args)
    args = null
    ctx = null
    requestId = null
  }
}
