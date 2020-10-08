const {
  isCorrectClientName,
  isCorrectDate,
  isCorrectTableNumber,
  isCorrectReserve
} = require('../../../src/model/reserve/constraints')

describe('isCorrectClientName tests', () => {
  test('correct client name provided', () => {
    expect(isCorrectClientName('John Mayer')).toBeTruthy()
  })

  test('empty client name provided', () => {
    expect(isCorrectClientName('')).toBeFalsy()
  })

  test('short client name provided', () => {
    expect(isCorrectClientName('a')).toBeFalsy()
  })

  test('min allowed length client name provided', () => {
    expect(isCorrectClientName('Ha')).toBeTruthy()
  })
})

describe('isCorrectDate tests', () => {
  test('correct date provided', () => {
    expect(isCorrectDate('2020-12-12')).toBeTruthy()
  })

  test('no date provided', () => {
    expect(isCorrectDate('no date provided')).toBeFalsy()
  })

  test('less then 2000 year date provided', () => {
    expect(isCorrectDate('1993-12-12')).toBeFalsy()
  })

  test('empty date', () => {
    expect(isCorrectDate('')).toBeFalsy()
  })
})

describe('isCorrectTableNumber tests', () => {
  test('correct table number provided', () => {
    expect(isCorrectTableNumber(5)).toBeTruthy()
  })

  test('negative table number value provided', () => {
    expect(isCorrectTableNumber(-1)).toBeFalsy()
  })

  test('empty table number provided', () => {
    expect(isCorrectTableNumber('')).toBeFalsy()
  })
})

describe('isCorrectReserve tests', () => {
  test('correct reserve object provided', () => {
    expect(
      isCorrectReserve({
        'date': '2022-12-12',
        'client_name': 'John Mayer',
        'table_number': 5
      })
    )
    .toBeTruthy()
  })

  test('empty plain object provided', () => {
    expect(isCorrectReserve({})).toBeFalsy()
  })
})