class GameLoop {
    constructor(fps = 1) {
        this.SetFPS(fps);
        
        this.Managers = [];

        this.Options = {
            Ticks: 0,
            Loop: null,
            IsPaused: false
        };
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
        if(!this.Options.IsPaused) {
            ++this.Options.Ticks;
    
            this.Managers.forEach(manager => {
                manager.OnTick({
                    tick: this.Options.Ticks
                });
            });
        }

        // console.info(this.Options.Ticks);
    }
}

export default GameLoop;