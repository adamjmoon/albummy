var run = require("../dist/run");
var chai = require("chai");
var expect = chai.expect;

describe('musicbrainz artistById', function () {
    // context

    it("artist name should be Justin Bieber", function (done) {
        var musicbrainz = require("../dist/musicbrainz");
        var mbz = new musicbrainz();


        run(function* () {
            let artist = yield mbz.artistById({id: 'e0140a67-e4d1-4f13-8a01-364355bee46e', incl: 'releases+release-groups+aliases'});
            expect(artist.name).to.be.equal('Justin Bieber');
            done();
        });
    });

});