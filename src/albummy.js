exports = module.exports = Albummy;
function Albummy(options){
    this.options = options;
}

Albummy.prototype.Album = require("../dist/album");
Albummy.prototype.Artist = require("../dist/artist");
Albummy.prototype.MusicBrainz = require("../dist/musicbrainz");
