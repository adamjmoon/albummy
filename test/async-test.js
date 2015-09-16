var async = require("../dist/async");
var chai = require("chai");
var expect = chai.expect;


describe('async with generator function', function () {
    // context

    async(function* () {

        function buildArray(len) {
            var array = [];
            for (var i = 0; i < len; i++) {
                array.push(i);
                if(i===len-1)
                    return array;
            }

        }

        var result = yield buildArray(10000);

        it('should be the length passed in', function (done) {

            expect(result.length).to.be.equal(10000);
            done();
        });
    });



});