import Render from "./Render.js";

class RenderEntity extends Render {
    constructor(fkp, entity) {
        super(fkp);

        this._entity = entity;
    }

    GetEntity() {
        return this._entity;
    }
    SetEntity(entity) {
        this._entity = entity;

        return this;
    }

    OnRender() {
        Render.call(this);  // (this, ...otherArgsThatChildOnRenderMethodsNeed)
    }
}

export default RenderEntity;