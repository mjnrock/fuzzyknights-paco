import Canvased from "./Canvased.js";

class Mixer extends Canvased {
    constructor(...bouncers) {
        super();

        this._bouncers = bouncers;
        
        this._isPaused = true;
    }

    Play() {
        this._bouncers.forEach(b => b.Reset());
        this._isPaused = false;

        return this;
    }
    Pause() {
        this._isPaused = true;

        return this;
    }

    GetBouncer(index) {
        return this._bouncers[ index ];
    }

    OnRender(time) {
        if(!this._isPaused) {
            this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    
            for(let i in this._bouncers) {
                let bouncer = this._bouncers[ i ];

                bouncer.OnRender(time);
                
                this._context.drawImage(bouncer._canvas, 0, 0);
            }

            let ctx = document.getElementById("main").getContext("2d");
            ctx.clearRect(0, 0, 512, 512);
            ctx.drawImage(this._canvas, 0, 0);
        }
    }
}

export default Mixer;