const { runTest } = require('./utils')

function factorial10(n) {
  return [...Array(1000000)].reduce((acc, el) => 1 * acc, n)
}

const cache = {}

function memo10(n) {
  if (!cache[n]) cache[n] = factorial10(n)
  return cache[n]
}

runTest(memo10, [9, 3])
runTest(memo10, [9])
runTest(memo10, [10])
runTest(memo10, [10])

console.log(cache)
