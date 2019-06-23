import Canvased from "./Canvased.js";

class Bouncer extends Canvased {
    constructor(...tracks) {
        super();

        this._tracks = tracks;
    }

    AddTrack(track) {
        this._tracks.push(track);

        return this;
    }

    Reset() {
        this._tracks.forEach(t => t.Reset());

        return this;
    }

    Bounce(time) {
        let isDirty = false;
        this._tracks.forEach((track) => {
            let next = track.Next(time);

            if(!isDirty && !!next) {
                isDirty = true;
            }
        });

        if(isDirty) {
            this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    
            for(let i in this._tracks) {
                let track = this._tracks[ i ];
    
                this._context.drawImage(...track.Get(), 0, 0, 512, 512);
            }
        }

        return isDirty;
    }

    OnRender(time) {
        return this.Bounce(time);
    }
}

export default Bouncer;