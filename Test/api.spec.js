const request = require('supertest');
// import server
const server = require('../server');

describe('API server', () => {
    let api;
    let testPark = {
      name: "Castle Park",
      city: 'Bristol',
      foodAndBeverage: "vegan kiosk with outdoor seating area",
      parking: false,
      toilets: true,
      disableAccess: true
};

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(5000, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /parks with status 200', (done) => {
        request(api).get('/parks').expect(200, done);
    });

 /*    it('responds to post /parks with status 201', (done) => {
        request(api)
            .post('/cats')
            .send(testCat)
            .set('Accept', /application\/json/)
            .expect(201)
            .expect({ id: 4, ...testCat }, done);
    });

    it('retrieves a cat by id', (done) => {
        request(api)
            .get('/cats/3')
            .expect(200)
            .expect({ id: 3, name: 'Rumble', age: 12 }, done);
    });

    it('responds to a unknown cat id with a 404', (done) => {
        request(api).get('/cats/42').expect(404).expect({}, done);
    });

    it('responds to delete /cats/:id with status 204', async () => {
        await request(api).delete('/cats/4').expect(204);

        const updatedCats = await request(api).get('/cats');

        expect(updatedCats.body.length).toBe(3);
    });
 */
    it('responds to non existing paths with 404', (done) => {
        request(api).get('/no').expect(404, done);
    });

    it('responds to invalid method request with 405', (done) => {
        request(api).post('/').expect(405, done);
    });
});
