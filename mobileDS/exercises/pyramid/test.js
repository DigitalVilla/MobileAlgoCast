test('pyramid is a function', () => {
  expect(typeof pyramid).toEqual('function')
})

test('prints a pyramid for n = 2', () => {
  const pyr = pyramid(2)
  expect(pyr[0]).toEqual(' # ')
  expect(pyr[1]).toEqual('###')
  expect(pyr.length).toEqual(2)
})

test('prints a pyramid for n = 3', () => {
  const pyr = pyramid(3)
  expect(pyr[0]).toEqual('  #  ')
  expect(pyr[1]).toEqual(' ### ')
  expect(pyr[2]).toEqual('#####')
  expect(pyr.length).toEqual(3)
})

test('prints a pyramid for n = 4', () => {
  const pyr = pyramid(4)
  expect(pyr[0]).toEqual('   #   ')
  expect(pyr[1]).toEqual('  ###  ')
  expect(pyr[2]).toEqual(' ##### ')
  expect(pyr[3]).toEqual('#######')
  expect(pyr.length).toEqual(4)
})
