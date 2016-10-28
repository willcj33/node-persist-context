'use strict';

const server  = require('./../service.js');
const config  = require('./../app.config.json').service;
console.log('http://' + config.host + ':' + config.port);
const request = require('supertest')('http://' + config.host + ':' + config.port);

describe('Service', () => {
    it('Should return a 200 \'ok\' on the /health endpoint.', done => {
        request
            .get('/health')
            .set('Accept', 'application/json')
            .expect(200, '"ok"', done);
    });

    describe('Routes', () => {

        describe('#GET /', () => {
            it('Should get a list of all sample data.', done => {
                request
                    .get('/')
                    .set('Accept', 'application/json')
                    .expect(200, done);
            });
        });

        describe('#GET /:id', () => {
            it('Should get a test item with id 1.', done => {
                request
                    .get('/1')
                    .set('Accept', 'application/json')
                    .expect(200, { id: 1, name: 'test 1' }, done);
            });
        });

        describe('#POST /', () => {
            it('Should create a new piece of test data and return 200.', done => {
                request
                    .post('/')
                    .send({ item: { name: 'Im crazy' }})
                    .set('Accept', 'application/json')
                    .expect(200, done);
            });
        });

        describe('#PUT /:id', () => {
            it('Should update the test item we just created and return 200.', done => {
                request
                    .put('/4')
                    .send({ id: 4, item: { name: 'but not really' }})
                    .set('Accept', 'application/json')
                    .expect(200, done);
            });
        });

        describe('#DELETE /:id', () => {
            it('Should remove the item we created and return a 200.', done => {
                request
                    .delete('/4')
                    .set('Accept', 'application/json')
                    .expect(200, done);
            });
        });
    });
});