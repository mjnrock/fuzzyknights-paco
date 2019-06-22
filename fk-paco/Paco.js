class Paco {
    constructor(fkp) {
        this.FKP = fkp;
    }

    Init(obj) {
        this.RegisterManagers(obj);

        return this;
    }

    RegisterManagers({ GameManager } = {}) {
        this.FKP.Game.GameManager = new this.FKP.Game.GameManager(this.FKP);
        this.FKP.Game.GameManager.Init(GameManager);

        return this;
    }
}

export default Paco;