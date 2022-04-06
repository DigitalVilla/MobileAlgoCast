let results = []

function test(title, callback) {
  results = []
  const header = `Test: ${title}`
  console.log(header)
  results.push({ class: 'header', text: header })

  try {
    callback()

    renderDOM()
  } catch (error) {
    console.log(error)
  }
}

function renderDOM(params) {
  const container = document.getElementById('results')
  const fragments = document.createDocumentFragment()

  results.forEach((el) => {
    const li = document.createElement('li')
    li.className = el.class
    li.innerText = el.text
    fragments.appendChild(li)
  })

  container.appendChild(fragments)
}

function expect(exp) {
  const opt = { inverse: false }

  logger = (type, result) => {
    result = opt.inverse ? !result : result
    const text = `${result ? 'PASSED' : 'FAILED'}! Expected "${exp}" ${
      opt.inverse ? 'not ' : ''
    }${type}`

    console.log(`%c${text}`, `color: ${result ? 'green' : 'red'}`)
    results.push({ class: result ? 'success' : 'danger', text })
  }

  const methods = {
    not: () => {
      opt.inverse = true
      return methods
    },
    toBeDefined: () => {
      logger('toBeDefined', exp)
    },
    toBeTruthy: (boolean = true) => {
      logger('toBeTruthy', boolean ? exp === true : exp)
    },
    toBeFalsy: (boolean = true) => {
      logger('toBeFalsy', boolean ? exp === false : !exp)
    },
    toEqual: (value) => {
      let result = false
      if (Array.isArray(value)) {
        result = arraysEqual(exp, value)
      } else if (typeof value === 'object') {
        result = objectsEquals(exp, value)
      } else {
        result = exp === value
      }
      logger(`toEqual "${value}"`, result)
    },
    toThrow: () => {
      logger(`toThrow`, false)
    },
  }

  return methods
}

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
