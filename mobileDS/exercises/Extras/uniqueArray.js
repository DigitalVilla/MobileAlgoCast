// given an array of  integers return a new array of unique values

function getUnique(arr) {
  const cache = {}

  for (let i = 0; i < arr.length; i++) {
    cache[arr[i]] = arr[i]
  }

  return Object.values(cache)
}

function getUniqueSort(arr) {
  const cache = {}
  const r = []

  for (let i = 0; i < arr.length; i++) {
    if (!cache[arr[i]]) {
      r.push(arr[i])
      cache[arr[i]] = 1
    }
  }

  return r.sort((a, b) => a - b)
}

// console.log(
//   getUnique([1, 2, 3, 3, 4, 2, 5, 6, 7, 2]) // [1,2,3,4,5,6,7,]
// )

function runTest(fn, args, expect) {
  console.time(arguments[0].name)
  expect(fn(...args))
  console.timeEnd(arguments[0].name)
  console.log()
}

runTest(
  getUnique,
  [[4, 0, 0, 9, 9, 5, 8, 6, 1, 2, 3, 3, 4, 2, 5, 6, 7, 2]],
  (r) => {
    console.log(r)
    r.length === 9
  }
)
runTest(
  getUniqueSort,
  [[4, 0, 0, 9, 9, 5, 8, 6, 1, 2, 3, 3, 4, 2, 5, 6, 7, 2]],
  (r) => {
    console.log(r)
    r.length === 9
  }
)
runTest(getUnique, [[4, 2, 2, 3, 2, 2, 2]], (r) => {
  //   console.log(r)
  r.length === 3
})
runTest(getUniqueSort, [[4, 2, 2, 3, 2, 2, 2]], (r) => {
  //   console.log(r)
  r.length === 3
})
runTest(
  getUnique,
  [[4, 2, 2, 3, 2, 2, 2, ...[...Array(10000000)].map(() => 1)]],
  (r) => {
    // console.log(r)
    r.length === 3
  }
)
runTest(
  getUniqueSort,
  [[4, 2, 2, 3, 2, 2, 2, ...[...Array(10000000)].map(() => 1)]],
  (r) => {
    // console.log(r)
    r.length === 3
  }
)

// runTest(
//   (arr) => {
//     return Array.from(new Set(arr))
//   },
//   [[1, 2, 3, 3, 4, 2, 5, 6, 7, 2]],
//   (r) => r.length === 7
// )

// return an array of repeated  values

function getDuplicates(arr) {
  const cache = {}

  for (let i = 0; i < arr.length; i++) {
    if (!cache[arr[i]]) cache[arr[i]] = [arr[i]]
    else cache[arr[i]].push(arr[i])
  }

  return Object.values(cache).reduce((acc, el) => {
    if (el.length > 1) acc.push(...el)
    return acc
  }, [])
}

// runTest(getDuplicates, [[1, 2, 3, 3, 4, 2, 5, 6, 7, 2]], (r) => {
// console.log(r)
//   return r.length === 5 // [2,2,2,3,3]
// })
