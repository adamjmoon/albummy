var Album = require("../dist/album");
var Artist = require("../dist/artist");
var chai = require("chai");
var expect = chai.expect;


describe('Album constructor', function() {
  // context
  var album = new Album(new Artist("Arctic Monkeys"));
  describe('artist', function () {
    it('should have a name', function () {
      expect(album.artist.name).to.be.equal("Arctic Monkeys");
    });
  });
});