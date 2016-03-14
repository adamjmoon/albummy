var coroutine = require("../dist/coroutine");
var co = require("co");
var chai = require("chai");
var expect = chai.expect;

describe('coroutine helper function', function () {
    var state = run();
    it('run state should be first yield iteration which is undefined', function () {
        expect(state.value).to.be.equal(undefined);
        expect(state.done).to.be.equal(false);
    });

    state = run(10);
    it('run state should be first yield iteration which is undefined', function () {
        expect(state.value).to.be.equal(undefined);
        expect(state.done).to.be.equal(false);
    });

    //run(30);
});

//# sourceMappingURL=coroutine-test-compiled.js.map