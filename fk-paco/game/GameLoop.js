class GameLoop {
    constructor(fps = 1) {
        this.SetFPS(fps);
        
        this.Managers = [];

        this.Options = {
            Ticks: 0,
            Loop: null,
            IsPaused: false,
            HasFocus: true
        };

        //! Use for debugging only, pretty fucking pointless on a phone if you have to keep the app open and focused to progress
        if(window) {
            window.onfocus = (e) => {
                this.Options.HasFocus = true;
    
                console.log("FOCUS");
            }
            window.onblur = (e) => {
                this.Options.HasFocus = false;
    
                console.log("BLUR");
            }
        }
    }

    CreateLoop() {
        this.Options.Loop = setInterval(this.OnTick.bind(this), this.TickRate);

        return this;
    }
    DestroyLoop() {
        clearInterval(this.Options.Loop);

        return this;
    }

    SetFPS(fps) {
        this.FPS = fps;
        this.TickRate = 1000 / this.FPS;
    }
    
    Start(fps = 1) {
        console.warn("[Game Loop]: Starting...");

        this.SetFPS(fps);
        this.CreateLoop();

        return this;
    }
    
    OnTick() {
        if(!this.Options.IsPaused && this.Options.HasFocus) {
            ++this.Options.Ticks;
    
            this.Managers.forEach(manager => {
                manager.OnTick({
                    tick: this.Options.Ticks
                });
            });
        }

        console.info(this.Options.Ticks);
    }
}

export default GameLoop;