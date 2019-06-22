import { UUID } from "./../utility/Helper.js"

import EnumComponent from "./../component/EnumComponent.js";
import Component from "../component/Component.js";

class Entity {
    constructor(components = {}) {
        this._uuid = UUID();

        if(Array.isArray(components)) {
            this._components = {};

            components.forEach(comp => {
                this.AddComponent(comp);
            });
        } else {
            this._components = components;
        }
    }

    GetComponent(input) {
        if(typeof input === "number") {
            let [ key ] = EnumComponent._lookup(input);

            return this._components[ key ];
        } else if(typeof input === "string" || input instanceof String) {
            return this._components[ input ];
        }
    }
    SetComponents(comps = {}) {
        this._components = comps;

        return this;
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

    OnTick() {
        for(let key in this._components) {
            let comp = this._components[ key ];

            comp.OnTick();
        }
    }
}

export default Entity;