// Implement a function that takes an array of zeros and ones and
// should return true if there is exactly one continuous set of zeros.
// For example [0,0,1,1] should return true, [1,0,0,0,0,1,0] should return false.

/**
 * My Original code with the "arr.lenght" typo fixed
 */
function hasZeroesRaw(arr) {
  let valid = false
  let breakOne = false

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]

    // if zero
    if (el === 0) valid = true

    // on 1 break
    if (el === 1 && valid) breakOne = true

    // on 0 wrong!
    if (el === 0 && valid && breakOne) {
      valid = false
      break
    }
  }

  return valid
}

/**
 * My attempt at "O (log n)"
 * It limits the max number of iterations to (arr.length / 2) times
 */
function hasZeroesLogN(arr) {
  const validSet = { a: false, b: false }
  let closeSet = false

  for (let i = 0, j = arr.length - 1; i <= j && j >= i; i++, j--) {
    const el = arr[i]
    const el2 = arr[j]

    // If there is a 0 start a validSet
    if (el === 0) validSet.a = true
    if (i !== j && el2 === 0) validSet.b = true

    // If there is a validSet check if el/el2 is a 1
    if (validSet.a || validSet.b) {
      // if 1 is not at the start closeSet
      if (i > 0 && el === 1) closeSet = true
      // if 1 is not at the end closeSet
      else if (i !== j && j < arr.length - 1 && el2 === 1) closeSet = true
    }

    // If the set is Closed and there is more than 1 valid set then break
    if (closeSet && validSet.b && validSet.a) {
      validSet.a = false
      validSet.b = false
      break
    }
  }

  return validSet.a || validSet.b
}

function hasZeroes(arr) {
  let a = 0
  let b = arr.length - 1
  let za = false
  let zb = false
  let has1 = false

  while (a <= b) {
    if (!za && arr[a] === 0) za = true
    if (b > a && !zb && arr[b] === 0) zb = true
    if (za && arr[a] === 1) has1 = true
    if (b > a && zb && arr[b] === 1) has1 = true
    if (zb && za && has1) return false

    a++
    b--
  }
  return za || zb
}

function hasZeroes2(arr) {
  let za = false
  let zb = false
  let has1 = false

  for (let a = 0, b = arr.length - 1; a <= b; a++, b--) {
    if (!za && arr[a] === 0) za = true
    if (b > a && !zb && arr[b] === 0) zb = true
    if (za && arr[a] === 1) has1 = true
    if (b > a && zb && arr[b] === 1) has1 = true
    if (zb && za && has1) return false
  }

  return za || zb
}

// Test cases
function runTest(arr, expected) {
  console.time('hasZeroes')
  console.log(`${hasZeroes(arr) === expected ? 'Passed' : 'Failed'}`)
  console.timeEnd('hasZeroes')
  console.time('hasZeroes2')
  console.log(`${hasZeroes2(arr) === expected ? 'Passed' : 'Failed'}`)
  console.timeEnd('hasZeroes2')
  console.log()
}

runTest([0], true)
runTest([1], false)
runTest([0, 0, 1, 0], false)
runTest([1, 0, 0, 0, 0, 1], true)
runTest([1, 0, 0, 0, 0, 1, 0], false)
runTest([0, 0, 0, 0, 1], true)
runTest([0, 0, 0, 0, 1, 0, 1, 0], false)
runTest([1, 0, 0, 0, 0], true)
runTest([1, 1, 1, 1], false)
runTest([1, 0], true)
runTest([0, 1, 0, 0, 1], false)
runTest([0, 0, 0, 0], true)
runTest([1, 0, 1, 0, 0, 1], false)
runTest([1, 0, 1], true)
runTest([1, 0, 0, 1, 0, 1, 1, 0, 1, 0], false)
runTest([1, 0, 0, 1, ...[...Array(1000000)].map(() => 1), 0, 1, 0], false)
