class Mixer {
    constructor(...bouncers) {
        this._bouncers = bouncers;

        this._canvas = document.createElement("canvas");

        this._canvas.id = "mixer";
        this._canvas.width = 512;
        this._canvas.height = 512;
        
        this._context = this._canvas.getContext("2d");

        this._isPaused = true;
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