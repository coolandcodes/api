var request = require('supertest');
var should = require('should');

describe('CategoriesController', function() {

    describe('#create()', function() {
        it('should respond with new category', function (done) {
            request(sails.hooks.http.app)
            .post('/categories')
            .send({ name: 'test', imagePath: 'test' })
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                // res.body.name.should.equal('test');
                done();
            });
        });

    });

});