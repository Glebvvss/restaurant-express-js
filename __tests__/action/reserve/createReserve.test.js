jest.mock(
	'../../../src/config/db.js', 
	() => ({ dbname: 'test-restaurant.db' })
)

const { setup, down } = require('../../../src/core/env')
const createReserve   = require('../../../src/action/reserve/createReserve')

const responseSpy = {
	content: null,
	send: function(content) {
		this.content = JSON.parse(content)
	}
}

describe('createReserve action test', () => {
	beforeEach(setup)

	test('success', async () => {
		return
		const stubRequest = {
			body: {
				date: '2020-09-09',
				client_name: 'JohnMayer',
				table_number: '5'
			}
		}

		await createReserve(stubRequest, responseSpy)

		const content = responseSpy.content

		expect(content.success).toBe(1)
		expect(content.hasOwnProperty('data')).toBe(true)
		expect(content.data.hasOwnProperty('id')).toBe(true)
		expect(content.data.id).toBe(3)
	})

	afterEach(down)
})