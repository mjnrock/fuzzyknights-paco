import Manager from "./../core/Manager.js";

class GameManager extends Manager {
    constructor(fkp) {
        super(fkp);
    }

    Init(obj) {
        this.CreateGame(obj);

        return this;
    }

    CreateGame({ fps } = {}) {
        this.GameLoop = new this.FKP.Game.GameLoop();
        this.GameLoop.Start(fps);

        return this;
    }
}

export default GameManager;