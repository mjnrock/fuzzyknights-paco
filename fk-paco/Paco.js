class Paco {
    constructor(fkp) {
        this.FKP = fkp;

        //? DEBUG
        window.FKP = this.FKP;
        this.DEBUG_duration = 125;
    }

    Init(obj) {
        this.RegisterManagers(obj);

        this.FKP.Render.Animation.Mixer = new this.FKP.Render.Animation.Mixer(
            new this.FKP.Render.Animation.Bouncer()
        );
        
            fetch("http://localhost:3075/image/1")
                .then(response => response.json())
                .then(data => {
                    let image = new Image();
            
                    image.onload = (e) => {
                        this.FKP.Render.Animation.Mixer.GetBouncer(0).AddTrack(
                            new this.FKP.Render.Animation.Track(
                                image,
                                [
                                    [ 1, this.DEBUG_duration ],
                                    [ 2, this.DEBUG_duration ],
                                    [ 3, this.DEBUG_duration ],
                                    [ 4, this.DEBUG_duration ]
                                ]
                            )
                        );
                    };
                    image.src = data.base64;
                });

            fetch("http://localhost:3075/image/2")
                .then(response => response.json())
                .then(data => {
                    let image = new Image();
            
                    image.onload = (e) => {
                        this.FKP.Render.Animation.Mixer.GetBouncer(0).AddTrack(
                            new this.FKP.Render.Animation.Track(
                                image,
                                [
                                    [ 1, this.DEBUG_duration ],
                                    [ 2, this.DEBUG_duration ],
                                    [ 3, this.DEBUG_duration ],
                                    [ 4, this.DEBUG_duration ]
                                ]
                            )
                        );
                    };
                    image.src = data.base64;

                    this.FKP.Render.Animation.Mixer._isPaused = false;
                });

        return this;
    }

    RegisterManagers({ GameManagerConfig, EntityManagerConfig, RenderManagerConfig } = {}) {
        this.FKP.Entity.EntityManager = new this.FKP.Entity.EntityManager(this.FKP);
        this.FKP.Entity.EntityManager.Init(EntityManagerConfig);

        this.FKP.Render.RenderManager = new this.FKP.Render.RenderManager(this.FKP);
        this.FKP.Render.RenderManager.Init(RenderManagerConfig);

        this.FKP.Game.GameManager = new this.FKP.Game.GameManager(this.FKP);
        this.FKP.Game.GameManager.Init({
            ...GameManagerConfig,
            managers: [
                this.FKP.Entity.EntityManager,
                this.FKP.Render.RenderManager
            ]
        });

        return this;
    }
}

export default Paco;