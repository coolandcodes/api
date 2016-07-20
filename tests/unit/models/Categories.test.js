var should = require('should');
describe('UserModel', function() {

  describe('#find()', function() {
    it('should check find function', function (done) {
      Categories.find()
      .then(function(results) {
        console.log(results)
        done();
      })
      .catch(done);
    });
  });

});
