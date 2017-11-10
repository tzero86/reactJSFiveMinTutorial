//Access supertest module functionality under the variable name "request"
const request = require('supertest');

//Top level of this test suite: the entire user API
describe('The User API', () => {

	//Specific Test
	it('Returns a list of all users', async () => {

		//Connect ot the server and get a response
		//Expect that response to be 200 and serve a JSON
		const res = await request('http://localhost:3000')
		.get('/api/users/list')
		.expect(200)
		.expect('Content-Type', /json/);

		//These expects are jest, not supertest
		//first, expect to get a result that is an array
		expect(Array.isArray(res.body)).toBe(true);
		//second, expect that array to have something in it
		expect(res.body.length).toBeGreaterThan(0);
		//Third, expect the username of the first returned user to be Administrator
		expect(res.body[0].username).toBe('administrator');
	});
});