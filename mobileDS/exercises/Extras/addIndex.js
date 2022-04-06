// given an array if integers return the index of 2 values that add up to a target

function addUpto(arr, target) {
  const ntf = {}
  for (let i = 0; i < arr.length; i++) {
    const n = ntf[arr[i]]

    if (n >= 0) return [n, i]
    const nf = target - arr[i]
    ntf[nf] = i
  }
  return null
}

function addUpto(arr, target) {
  // number to be found
  const ntf = {}

  for (let i = 0; i < arr.length; i++) {
    // Check if el is a ntf
    if (ntf[arr[i]] >= 0) return [ntf[arr[i]], i]
    // Set the next required ntf
    ntf[target - arr[i]] = i
  }
}

console.log(addUpto([2, 7, 11, 15], 9))
