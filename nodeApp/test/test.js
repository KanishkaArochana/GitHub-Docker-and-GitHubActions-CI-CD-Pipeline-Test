var request = require('supertest');
var app = require('../app');

describe('GET /will', function () {

    it('respond with hello world', function (done) {

        request(app)
            .get('/will')
            .expect(200)
            .expect('{ "response": "Hello World" }', done);

    });

});