// O(2n)
const { runTest } = require('./utils')

function isTypedEqual(S, T) {
  console.log()

  return reduce(S) == reduce(T)
}

function reduce(str) {
  const items = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '#') items.pop()
    else items.push(str[i])
  }
  return items.join('')
}

function isTypedEqual(A, B) {
  let a = A.length - 1,
    b = B.length - 1,
    strA = '',
    strB = '',
    hashA = 0,
    hashB = 0

  while (a >= 0 || b >= 0) {
    if (A[a]) {
      if (A[a] !== '#') {
        if (hashA === 0) strA += A[a]
        hashA = Math.max(hashA - 1, 0)
      } else hashA++
      a--
    }
    if (B[b]) {
      if (B[b] !== '#') {
        if (hashB === 0) strB += B[b]
        hashB = Math.max(hashB - 1, 0)
      } else hashB++
      b--
    }
  }
  return strA === strB
}

function isTypedEqual2(S, T) {
  let p1 = S.length - 1,
    p2 = T.length - 1

  while (p1 >= 0 || p2 >= 0) {
    if (S[p1] === '#' || T[p2] === '#') {
      if (S[p1] === '#') {
        let backCount = 2

        while (backCount > 0) {
          p1--
          backCount--

          if (S[p1] === '#') {
            backCount += 2
          }
        }
      }

      if (T[p2] === '#') {
        let backCount = 2

        while (backCount > 0) {
          p2--
          backCount--

          if (T[p2] === '#') {
            backCount += 2
          }
        }
      }
    } else {
      if (S[p1] !== T[p2]) {
        return false
      } else {
        p1--
        p2--
      }
    }
  }

  return true
}

runTest(isTypedEqual, ['ab######c', '#az##c'])
runTest(isTypedEqual2, ['ab######c', '#az##c'])
runTest(isTypedEqual, ['ab####c#', ''])
runTest(isTypedEqual2, ['ab####c#', ''])
runTest(isTypedEqual, ['ab####c#a', 'A'])
runTest(isTypedEqual2, ['ab####c#a', 'A'])
runTest(isTypedEqual, ['abc#c#d', 'abd'])
runTest(isTypedEqual2, ['abc#c#d', 'abd'])
runTest(isTypedEqual, ['abc#c#d#', 'abd#'])
runTest(isTypedEqual2, ['abc#c#d#', 'abd#'])
