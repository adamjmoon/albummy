export default function () {

    var NB = require('nodebrainz');

// Initialize NodeBrainz
    var nb = new NB();

    this.artistById = function* (options){
        const caller = yield;

        nb.artist(options.id, { inc: options.incl }, function (err, artist) {
            if(err)
                caller.failure(err);
            else
                caller.success(artist);

        });

    };
}