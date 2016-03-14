var coroutine = require("../dist/coroutine");
var chai = require("chai");
var expect = chai.expect;

var run;
run = coroutine(function *()
{
    var x = 1 + (yield);
    var y = 1 + (yield);
    yield (x+y);
});


describe('coroutine helper function call with no args', function() {
    var state1 = run();
    it('run state should be first yield iteration which is undefined', function () {
        expect(state1.value).to.be.equal(undefined);
        expect(state1.done).to.be.equal(false);
    });
});

describe('coroutine helper function call with no args', function() {
    console.log(run());
    console.log(run(10));
    console.log(run(10));
    console.log(run(10));
;
    it('run state should be first yield iteration which is undefined', function () {
        expect(state2.value).to.be.equal(undefined);
        expect(state2.done).to.be.equal(false);
    });
});