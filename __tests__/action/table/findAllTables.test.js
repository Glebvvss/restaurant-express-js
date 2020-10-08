jest.mock(
  '../../../src/config/db.js', 
  () => ({ dbname: 'test-restaurant.db' })
)

const { setup, down } = require('../../../src/core/env')
const findAllTables   = require('../../../src/action/table/findAllTables')

const stubRequest = {}
const responseSpy = {
  content: null,
  send: function(content) {
    this.content = JSON.parse(content)
  }
}

describe('findAllTables action test', () => {
  beforeEach(setup)

  test('adds 1 + 2 to equal 3', async () => {
    await findAllTables(stubRequest, responseSpy)

    const content = responseSpy.content

    expect(content.success).toBe(1)
    expect(content.hasOwnProperty('data')).toBe(true)
    content.data.forEach(item => {
      expect(item.hasOwnProperty('table_number')).toBe(true)
      expect(item.hasOwnProperty('capacity')).toBe(true)
    })
  })

  afterEach(down)
})