import Manager from "./../core/Manager.js";
import Render from "./Render.js";

class RenderManager extends Manager {
    constructor(fkp) {
        super(fkp);

        this._renderers = {};
    }

    Init({} = {}) {
        //  NOOP
    }

    GetRenderers() {
        return this._renderers;
    }
    SetRenderers(rendereres) {
        this._renderers = rendereres;

        return this;
    }

    Find(uuid) {
        return this._renderers[ uuid ];
    }
    Add(renderer) {
        if(renderer instanceof Render) {
            this._renderers[ renderer._uuid ] = renderer;
        }

        return this;
    }

    Register(renderer) {
        if(renderer instanceof Render) {
            this.Add(renderer);
        }

        return this;
    }
    Unregister(renderer) {
        if(typeof renderer === "string" || renderer instanceof String) {
            delete this._renderers[ renderer ];
         } else if(renderer instanceof Render) {
             delete this._renderers[ renderer._uuid ];
         }

         return this;
    }
}

export default RenderManager;