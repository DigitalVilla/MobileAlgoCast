const accounts = [
  { name: 'John Doe', balance: 300.0, moreData: { a: 'hello', b: 'world' } },
  { name: 'Ana Doe', balance: 500.0 },
  { name: 'James Smith', balance: 800.0 },
  { name: 'Debora Smith', balance: 100.0 },
]

const newAccounts = accounts.map((account) => {
  const acc = { ...account, moreData: { ...account.moreData } }
  acc.balance = acc.balance + acc.balance * 0.1
  acc.moreData.a = 'asdasd'
  return acc
})

console.log(accounts[1].balance) // What's the output 500.0
console.log(newAccounts[1].balance) // What's the output 550.0

/**
  Given a string of available characters and a string representing a document that you need to generate.
  Write a function that determines if you can generate the document using the available characters.
  You can only generate the document if the frequency of unique characters in the string characters is equal
  or greater than the frequency of characters in the document
  The document can contain lower and upper case characters
  
  Example:
  characters = "UsOn Digital"
  document   = "Digital OnUs"

  In this case, we can generate the document
  Example 2:
  characters = "UsOn Digitallllllll"
  document   = "Digital OnUs"

  In this case, we cannot generate the document because of the missing blank space
  Test cases
  Input:
    characters = "UsOn Digital"
    document = "Digital OnUs"
  Output: true
  Input:
    characters = "A"
    document = "a"
  Output: false
  Input:
    characters = "aheaollabbhb"
    document = "hello"
  Output: true

*/
//
function getDoc(c, d) {
  const charsC = {} // U: 1, s:1, O:1 ' ': 1

  // chaches items
  for (let i = 0; i < c.length; i++) {
    if (chars[c[i]]) chars[c[i]] = chars[c[i]] + 1
    else chars[c[i]] = 1
  }

  for (let i = 0; i < d.length; i++) {
    // check if chars
    if (!chars[d[i]]) return false
    // check count
    if (chars[d[i]]) {
      // chars decrease
      chars[d[i]] = Math.max(chars[d[i]] - 1, 0)
    }
  }

  return true
}
