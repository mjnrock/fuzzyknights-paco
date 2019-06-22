class Paco {
    constructor(fkp) {
        this.FKP = fkp;
    }

    Init(obj) {
        this.RegisterManagers(obj);

        return this;
    }

    RegisterManagers({ GameManager, EntityManager } = {}) {
        this.FKP.Entity.EntityManager = new this.FKP.Entity.EntityManager(this.FKP);
        this.FKP.Entity.EntityManager.Init(EntityManager);

        this.FKP.Game.GameManager = new this.FKP.Game.GameManager(this.FKP);
        this.FKP.Game.GameManager.Init({
            ...GameManager,
            managers: [
                this.FKP.Entity.EntityManager
            ]
        });

        return this;
    }
}

export default Paco;