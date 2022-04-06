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
*/
function getDoc(c, d) {
  const charsC = {} // U: 1, s:1, O:1 ' ': 1
  // cashes items
  for (let i = 0; i < c.length; i++) {
    if (charsC[c[i]]) charsC[c[i]] = charsC[c[i]] + 1
    else charsC[c[i]] = 1
  }

  for (let i = 0; i < d.length; i++) {
    // check if chars
    if (!charsC[d[i]]) return false
    // check count
    if (charsC[d[i]]) {
      // charsC decrease
      charsC[d[i]] = Math.max(charsC[d[i]] - 1, 0)
    }
  }

  return true
}

// Test cases
// Input:
//   characters = "UsOn Digital"
//   document = "Digital OnUs"
// Output: true
// Input:
//   characters = "A"
//   document = "a"
// Output: false
// Input:
//   characters = "aheaollabbhb"
//   document = "hello"
// Output: true

console.log(getDoc('UsOn Digital', 'Digital OnUs'))
console.log(getDoc('A', 'a'))
console.log(getDoc('aheaollabbhb', 'hello'))
