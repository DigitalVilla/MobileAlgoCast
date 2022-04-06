test('fizzBuzz function is defined', () => {
  expect(fizzBuzz).toBeDefined()
})

test('Calling fizzbuzz with `5` prints out 5 statements', () => {
  expect(fizzBuzz(5).length).toEqual(5)
})

test('Calling fizzbuzz with 15 prints out the correct values', () => {
  let fb = fizzBuzz(15)

  expect(fb[0]).toEqual(1)
  expect(fb[1]).toEqual(2)
  expect(fb[2]).toEqual('fizz')
  expect(fb[3]).toEqual(4)
  expect(fb[4]).toEqual('buzz')
  expect(fb[5]).toEqual('fizz')
  expect(fb[6]).toEqual(7)
  expect(fb[7]).toEqual(8)
  expect(fb[8]).toEqual('fizz')
  expect(fb[9]).toEqual('buzz')
  expect(fb[10]).toEqual(11)
  expect(fb[11]).toEqual('fizz')
  expect(fb[12]).toEqual(13)
  expect(fb[13]).toEqual(14)
  expect(fb[14]).toEqual('fizzbuzz')
})
