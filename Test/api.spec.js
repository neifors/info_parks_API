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

    it('retrieves a park by the exact name', (done) => {
        request(api)
            .get('/parks/St George')
            .expect(200)
            .expect([{"name":"St George","city":"Bristol","foodAndBeverage":"café kiosk with outdoor seating area","parking":false,"toilets":true,"disableAccess":true}], done);
    });

    it('retrieves a park by name (lower case)', (done) => {
        request(api)
            .get('/parks/st george')
            .expect(200)
            .expect([{"name":"St George","city":"Bristol","foodAndBeverage":"café kiosk with outdoor seating area","parking":false,"toilets":true,"disableAccess":true}], done);
    });

    it('retrieves a park by name (upper case)', (done) => {
        request(api)
            .get('/parks/ST GEORGE')
            .expect(200)
            .expect([{"name":"St George","city":"Bristol","foodAndBeverage":"café kiosk with outdoor seating area","parking":false,"toilets":true,"disableAccess":true}], done);
    });

    it('retrieves a park by name (mixed lower and upper case)', (done) => {
        request(api)
            .get('/parks/sT gEOrge')
            .expect(200)
            .expect([{"name":"St George","city":"Bristol","foodAndBeverage":"café kiosk with outdoor seating area","parking":false,"toilets":true,"disableAccess":true}], done);
    });
    
    it('retrieves a park by the exact name of the city', (done) => {
        request(api)
            .get('/parks/city/Bristol')
            .expect(200)
            .expect([
                {name: "St George", city: "Bristol", foodAndBeverage: "café kiosk with outdoor seating area", parking: false, toilets: true,  disableAccess: true},
                {name: "Castle Park", city: "Bristol", foodAndBeverage: "vegan kiosk with outdoor seating area", parking: false, toilets: true,  disableAccess: true},
                {name: "Victoria Park", city: "Bristol", foodAndBeverage: "Stuffed's café", parking: false, toilets: true,  disableAccess: true},
                {name: "Arnos Vale Cementery", city: "Bristol", foodAndBeverage: "Atrium Café", parking: true, toilets: true,  disableAccess: true},
                {name: "Brandon Hill Nature Park", city: "Bristol", foodAndBeverage: null, parking: false, toilets: true,  disableAccess: true},
                {name: "Netham Park and Pavilion", city: "Bristol", foodAndBeverage: null, parking: true, toilets: true,  disableAccess: false},
                {name: "St Agnes Park", city: "Bristol", foodAndBeverage: null, parking: false, toilets: false,  disableAccess: true},
                {name: "The Downs", city: "Bristol", foodAndBeverage: "The Downs Cafe", parking: false, toilets: true,  disableAccess: true}
             ], done);
    });
    it('retrieves a park by name of the city (lower case)', (done) => {
        request(api)
            .get('/parks/city/bristol')
            .expect(200)
            .expect([
                {name: "St George", city: "Bristol", foodAndBeverage: "café kiosk with outdoor seating area", parking: false, toilets: true,  disableAccess: true},
                {name: "Castle Park", city: "Bristol", foodAndBeverage: "vegan kiosk with outdoor seating area", parking: false, toilets: true,  disableAccess: true},
                {name: "Victoria Park", city: "Bristol", foodAndBeverage: "Stuffed's café", parking: false, toilets: true,  disableAccess: true},
                {name: "Arnos Vale Cementery", city: "Bristol", foodAndBeverage: "Atrium Café", parking: true, toilets: true,  disableAccess: true},
                {name: "Brandon Hill Nature Park", city: "Bristol", foodAndBeverage: null, parking: false, toilets: true,  disableAccess: true},
                {name: "Netham Park and Pavilion", city: "Bristol", foodAndBeverage: null, parking: true, toilets: true,  disableAccess: false},
                {name: "St Agnes Park", city: "Bristol", foodAndBeverage: null, parking: false, toilets: false,  disableAccess: true},
                {name: "The Downs", city: "Bristol", foodAndBeverage: "The Downs Cafe", parking: false, toilets: true,  disableAccess: true}
             ], done);
    });

    it('retrieves a park by name of the city (upper case)', (done) => {
        request(api)
            .get('/parks/city/BRISTOL')
            .expect(200)
            .expect([
                {name: "St George", city: "Bristol", foodAndBeverage: "café kiosk with outdoor seating area", parking: false, toilets: true,  disableAccess: true},
                {name: "Castle Park", city: "Bristol", foodAndBeverage: "vegan kiosk with outdoor seating area", parking: false, toilets: true,  disableAccess: true},
                {name: "Victoria Park", city: "Bristol", foodAndBeverage: "Stuffed's café", parking: false, toilets: true,  disableAccess: true},
                {name: "Arnos Vale Cementery", city: "Bristol", foodAndBeverage: "Atrium Café", parking: true, toilets: true,  disableAccess: true},
                {name: "Brandon Hill Nature Park", city: "Bristol", foodAndBeverage: null, parking: false, toilets: true,  disableAccess: true},
                {name: "Netham Park and Pavilion", city: "Bristol", foodAndBeverage: null, parking: true, toilets: true,  disableAccess: false},
                {name: "St Agnes Park", city: "Bristol", foodAndBeverage: null, parking: false, toilets: false,  disableAccess: true},
                {name: "The Downs", city: "Bristol", foodAndBeverage: "The Downs Cafe", parking: false, toilets: true,  disableAccess: true}
             ], done);
    });


    it('retrieves a park by name of the city (mixed lower and upper case)', (done) => {
        request(api)
            .get('/parks/city/brISTOL')
            .expect(200)
            .expect([
                {name: "St George", city: "Bristol", foodAndBeverage: "café kiosk with outdoor seating area", parking: false, toilets: true,  disableAccess: true},
                {name: "Castle Park", city: "Bristol", foodAndBeverage: "vegan kiosk with outdoor seating area", parking: false, toilets: true,  disableAccess: true},
                {name: "Victoria Park", city: "Bristol", foodAndBeverage: "Stuffed's café", parking: false, toilets: true,  disableAccess: true},
                {name: "Arnos Vale Cementery", city: "Bristol", foodAndBeverage: "Atrium Café", parking: true, toilets: true,  disableAccess: true},
                {name: "Brandon Hill Nature Park", city: "Bristol", foodAndBeverage: null, parking: false, toilets: true,  disableAccess: true},
                {name: "Netham Park and Pavilion", city: "Bristol", foodAndBeverage: null, parking: true, toilets: true,  disableAccess: false},
                {name: "St Agnes Park", city: "Bristol", foodAndBeverage: null, parking: false, toilets: false,  disableAccess: true},
                {name: "The Downs", city: "Bristol", foodAndBeverage: "The Downs Cafe", parking: false, toilets: true,  disableAccess: true}
             ], done);
    });




 /*    it('responds to post /parks with status 201', (done) => {
        request(api)
            .post('/cats')
            .send(testCat)
            .set('Accept', /application\/json/)
            .expect(201)
            .expect({ id: 4, ...testCat }, done);
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
