var foo = require("../dist/generator");
var chai = require("chai");
var expect = chai.expect;


describe('generator function', function() {
    // context
    var iterator = foo();
    var state = iterator.next();
    it('generator state should be first yield iteration', function () {
        expect(state.value).to.be.equal(1);
        expect(state.done).to.be.equal(false);
    });
    var stateNext = iterator.next();
    it('generator state should be done with return statement', function () {
        expect(stateNext.value).to.be.equal(2);
        expect(stateNext.done).to.be.equal(true);
    });
});