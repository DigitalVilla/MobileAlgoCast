test('steps is a function', () => {
  expect(typeof steps).toEqual('function')
})

test('steps called with n = 1', () => {
  const stp = steps(1)
  expect(stp[0][0]).toEqual('#')
  expect(stp.length).toEqual(1)
})

test('steps called with n = 2', () => {
  const stp = steps(2)
  expect(stp[0][0]).toEqual('# ')
  expect(stp[1][0]).toEqual('##')
  expect(stp.length).toEqual(2)
})

test('steps called with n = 3', () => {
  const stp = steps(3)
  expect(stp[0][0]).toEqual('#  ')
  expect(stp[1][0]).toEqual('## ')
  expect(stp[2][0]).toEqual('###')
  expect(stp.length).toEqual(3)
})
