class Bouncer {
    constructor(...tracks) {
        this._tracks = tracks;

        this._canvas = document.createElement("canvas");

        this._canvas.id = "mixer";
        this._canvas.width = 512;
        this._canvas.height = 512;
        
        this._context = this._canvas.getContext("2d");
    }

    AddTrack(track) {
        this._tracks.push(track);

        return this;
    }

    Bounce(time) {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);

        for(let i in this._tracks) {
            let track = this._tracks[ i ];

            //TODO: Optimize this somehow by doing something with the true|false that .Next() returns (if dirty or not)
            track.Next(time);

            this._context.drawImage(...track.Get(), 0, 0, 512, 512);
        }
    }

    OnRender(time) {
        this.Bounce(time);

        return [ this._canvas, this._context ];
    }
}

export default Bouncer;