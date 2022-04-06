// given an array of integers representing an elevation map where te width of each bar is 1
// return how much rainwater can be trapped (area)
const { runTest } = require('./utils')

function rainWater(arr) {
  let children = {}
  const buckets = []
  const cnt = {
    a: {},
    b: {},
    children: [],
  }

  for (let a = 0; a < arr.length - 1; a++) {
    for (let b = a + 1; !children[a] && arr[a] && b < arr.length; b++) {
      if (arr[b] > arr[a] && b - a > 1) {
        cnt.a = { val: arr[a], i: a }
        cnt.b = { val: arr[b], i: b }
        buckets.push({
          ...cnt,
          area:
            cnt.a.val * (cnt.b.i - 1 - cnt.a.i) -
            cnt.children.reduce((acc, el) => {
              return acc + el
            }, 0),
        })
        // cnt.a = {}
        // cnt.b = {}
        cnt.children = []
        break
      } else if (arr[b]) {
        // set by index
        children[b] = arr[b]
        cnt.children.push(arr[b])
      }
    }
  }
  console.log(buckets, children)
}

function rainWater(arr) {
  let total = 0

  for (let i = 1; i < arr.length - 1; i++) {
    let l = i - 1
    let r = i + 1
    let maxL = arr[i]
    let maxR = arr[i]
    while (l >= 0 || r < arr.length) {
      if (l >= 0 && arr[l] > maxL) maxL = arr[l]
      if (r >= 0 && arr[r] > maxR) maxR = arr[r]
      l--
      r++
    }
    const t = Math.min(maxL, maxR) - arr[i]
    if (t > 0) total += t
  }
  return total
}
// code
function rainWater(arr) {
  let total = 0

  for (let i = 1; i < arr.length - 1; i++) {
    let l = i - 1
    let r = i + 1
    let maxL = arr[i]
    let maxR = arr[i]
    while (l >= 0) {
      maxL = Math.max(maxL, arr[l])
      l--
    }
    while (r < arr.length) {
      maxR = Math.max(maxR, arr[r])
      r++
    }
    const t = Math.min(maxL, maxR) - arr[i]
    if (t > 0) total += t
  }
  return total
}

function rainWater(arr) {
  let r = arr.length - 1,
    l = 0,
    total = 0,
    maxL = 0,
    maxR = 0

  while (l < r) {
    if (arr[l] <= arr[r]) {
      if (arr[l] >= maxL) {
        maxL = arr[l]
      } else {
        total += maxL - arr[l]
      }
      l++
    } else {
      if (arr[r] >= maxR) {
        maxR = arr[r]
      } else {
        total += maxR - arr[r]
      }
      r--
    }
  }

  return total
}

function rainWaterNew(arr) {
  const maxL = { count: 0 }
  const maxR = { count: 0 }
  let area = 0,
    l = 0,
    r = arr.length - 1,
    i = 0,
    max = null

  while (l < r) {
    i = arr[l] <= arr[r] ? l : r
    max = i === l ? maxL : maxR
    if (arr[i] >= max.count) max.count = arr[i]
    else area += max.count - arr[i]
    if (i === l) l++
    else r--
  }

  return area
}

// rainWaterNew([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
// rainWaterNew([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2])

runTest(rainWater, [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]]) // 6
runTest(rainWater, [[0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]]) // 8
runTest(rainWater, [[5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1]]) //20
runTest(rainWaterNew, [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]]) // 6
runTest(rainWaterNew, [[0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]]) // 8
runTest(rainWaterNew, [[5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1]]) //20
