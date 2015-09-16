var run = require("../dist/run");
var chai = require("chai");
var expect = chai.expect;
describe('run multiple artistById Requests', function () {
    // context
    var musicbrainz = require("../dist/musicbrainz");
    var mbz = new musicbrainz();

    it("should return Nirvana and Metallica", function (done) {

        run(function* () {
            let nirvana = yield mbz.artistById({id:'5b11f4ce-a62d-471e-81fc-a69a8278c7da',incl: 'release-groups'});
            let metallica = yield mbz.artistById({id:'65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab',incl: 'release-groups'});
            expect(nirvana.name).to.be.equal('Nirvana');
            expect(metallica.name).to.be.equal('Metallica');
            done();

        });


    });

    it("should request Nirvana and Metallica in Parallel", function (done) {
        run(function* () {
            let artists =
                yield [
                 mbz.artistById({id:'5b11f4ce-a62d-471e-81fc-a69a8278c7da',incl: 'release-groups'}),
                 mbz.artistById({id:'65f4f0c5-ef9e-490c-aee3-909e7ae6b2ab',incl: 'release-groups'})
                ];
            expect(artists[0].name).to.be.equal('Nirvana');
            expect(artists[1].name).to.be.equal('Metallica');
            done();

        });


    });


});