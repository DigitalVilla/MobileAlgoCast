// you are given an array of integers  were each represents the height of a vertical line on a chart
// Find 2 lines which together with the x-axis forms a container that holds the greatest amount of water,
// Return the area of water.

const { runTest } = require('./utils')

function highIndex(arr) {
  // formula min(a,b) * abs(ai - bi)
  let area = -1

  for (let a = 0; a < arr.length; a++) {
    for (let b = a + 1; b < arr.length; b++) {
      const tempArea = Math.min(arr[a], arr[b]) * (b - a)
      area = Math.max(tempArea, area)
    }
  }
  return area
}

function highIndex2(arr) {
  // formula min(a,b) * abs(ai - bi)
  let area = -1

  let a = 0
  let b = arr.length - 1
  while (a < b && b > a) {
    const min = Math.min(arr[a], arr[b])
    area = Math.max(min * (b - a), area)
    if (arr[a] < arr[b]) a++
    else b--
  }

  return area
}

function highIndex3(arr) {
  // formula min(a,b) * abs(ai - bi)
  let a = 0
  let b = arr.length - 1
  let area = -1
  while (a < b) {
    const min = Math.min(arr[a], arr[b])
    area = Math.max(min * (b - a), area)
    if (arr[a] <= arr[b]) a++
    else b--
  }

  return area
}

function highIndexNew(arr) {
  let area = 0,
    a = 0,
    b = arr.length - 1

  while (a < b) {
    area = Math.max(Math.min(arr[a], arr[b]) * (b - a), area)
    if (arr[a] <= arr[b]) a++
    else b--
  }
  return area
}

runTest(highIndex, [[1, 8, 6, 2, 9, 4]], (r) => {
  console.log(r)
})
runTest(highIndex, [[1, 7, 2, 0, 1, 3]], (r) => {
  console.log(r)
})
runTest(highIndex, [[7, 1, 2, 3, 9, 3, 5, 6, 7, 2, 3, 1]], (r) => {
  console.log(r)
})

runTest(
  highIndex,
  [
    [
      7, 1, 2, 3, 9, 3, 5, 6, 7, 2, 3, 1, 3, 5, 4, 3, 3, 5, 7, 2, 1, 1, 1, 2, 5,
      4, 3, 4, 3, 2, 5, 4,
    ],
  ],
  (r) => {
    console.log(r)
  }
)
runTest(highIndexNew, [[1, 8, 6, 2, 9, 4]], (r) => {
  console.log(r)
})
runTest(highIndexNew, [[1, 7, 2, 0, 1, 3]], (r) => {
  console.log(r)
})
runTest(highIndexNew, [[7, 1, 2, 3, 9, 3, 5, 6, 7, 2, 3, 1]], (r) => {
  console.log(r)
})
runTest(
  highIndexNew,
  [
    [
      7, 1, 2, 3, 9, 3, 5, 6, 7, 2, 3, 1, 3, 5, 4, 3, 3, 5, 7, 2, 1, 1, 1, 2, 5,
      4, 3, 4, 3, 2, 5, 4,
    ],
  ],
  (r) => {
    console.log(r)
  }
)
