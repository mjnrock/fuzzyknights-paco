import Manager from "./../core/Manager.js";

class GameManager extends Manager {
    constructor(fkp) {
        super(fkp);
    }

    Init(obj) {
        this.CreateGame(obj);

        return this;
    }

    CreateGame({ fps = 1, managers = [] } = {}) {
        this.GameLoop = new this.FKP.Game.GameLoop();
        this.GameLoop.Managers = managers;
        this.GameLoop.Start(fps);

        return this;
    }
}

export default GameManager;