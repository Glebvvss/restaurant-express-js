jest.mock(
    '../../../src/config/db.js', 
    () => ({ dbname: 'test-restaurant.db' })
  )
  
  const { setup, down } = require('../../../src/core/env')
  const findTodayReserves = require('../../../src/action/reserve/findTodayReserves')
  
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
      await findTodayReserves(stubRequest, responseSpy)
  
      const content = responseSpy.content
  
      expect(content.success).toBe(1)
      expect(content.hasOwnProperty('data')).toBe(true)
      content.data.forEach(item => {
        expect(item.hasOwnProperty('id')).toBe(true)
        expect(item.hasOwnProperty('date')).toBe(true)
        // TODO: добавить проверку на сегодняшнюю дату
        expect(item.hasOwnProperty('client_name')).toBe(true)
        expect(item.hasOwnProperty('table_number')).toBe(true)
      })
    })
  
    afterEach(down)
  })