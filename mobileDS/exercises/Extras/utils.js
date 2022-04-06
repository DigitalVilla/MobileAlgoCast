function arraysEqual(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) {
      if (!arraysEqual(a[i], b[i])) return false
    }
    return true
  } else {
    return a === b // if not both arrays, should be the same
  }
}

function objectsEqual(o1, o2) {
  const entries1 = Object.entries(o1)
  const entries2 = Object.entries(o2)
  if (entries1.length !== entries2.length) {
    return false
  }
  for (let i = 0; i < entries1.length; ++i) {
    // Keys
    if (entries1[i][0] !== entries2[i][0]) {
      return false
    }
    // Values
    if (entries1[i][1] !== entries2[i][1]) {
      return false
    }
  }

  return true
}

function runTest(fn, args, expect) {
  console.time(`${arguments[0].name} - ${args}`)
  if (expect) {
    expect(fn(...args))
  } else fn(...args)
  console.timeEnd(`${arguments[0].name} - ${args}`)
}

module.exports = {
  runTest,
  objectsEqual,
  arraysEqual,
}
