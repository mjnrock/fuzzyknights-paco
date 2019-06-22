import EnumComponent from "./../component/EnumComponent.js";
import Component from "../component/Component.js";

class Entity {
    constructor() {
        this._components = {};
    }

    AddComponent(comp) {
        if(comp instanceof Component) {
            this._components[ comp.GetName() ] = comp;
        } else if(typeof comp === "string" || comp instanceof String) {
            let clazz = EnumComponent._getClass(comp);

            if(typeof clazz === "function") {
                this._components[ comp ] = new clazz();
            }
        }

        return this;
    }
}

export default Entity;