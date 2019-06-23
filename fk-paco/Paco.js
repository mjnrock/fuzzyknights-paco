class Paco {
    constructor(fkp) {
        this.FKP = fkp;
    }

    Init(obj) {
        this.RegisterManagers(obj);

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