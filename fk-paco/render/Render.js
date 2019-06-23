import { UUID } from "./../utility/Helper.js";

class Render {
    constructor(fkp) {
        this._uuid = UUID();
        
        this.FKP = fkp;
    }

    OnRender() {
        // Draw to Canvas
    }
}

export default Render;