const supertest = require('supertest')
const app = require('../app')

describe('Test POST /signup route', () => {
	test('should respond with status code 200 created', async() => {
		const response = await request(app)
				.get('/api/v1/users/signup')
				.expect(201)
				.expect('Content-type', /json/)
	})
})