// O(2n)
const { runTest } = require('./utils')

function longestSubStr(S) {
  if (S.length <= 1) return S.length
  let longest = 0

  for (let left = 0; left < S.length; left++) {
    let rep = {},
      count = 0
    for (let right = left; right < S.length; right++) {
      if (!rep[S[right]]) {
        count++
        rep[S[right]] = 1
        longest = Math.max(longest, count)
      } else {
        break
      }
    }
  }

  return longest
}

function longestSubStrN(S) {
  if (S.length <= 1) return S.length
  let longest = 0

  for (let left = 0; left < S.length; left++) {
    let rep = {},
      count = 0
    for (let right = left; right < S.length; right++) {
      if (!rep[S[right]]) {
        count++
        rep[S[right]] = 1
        longest = Math.max(longest, count)
      } else {
        break
      }
    }
  }

  return longest
}

runTest(longestSubStr, ['abcabcbb'], (r) => console.log(r))
runTest(longestSubStr, ['abcbdca'], (r) => console.log(r))
runTest(longestSubStr, ['au'], (r) => console.log(r))
