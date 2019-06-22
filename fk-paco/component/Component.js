import { UUID } from "./../utility/Helper.js"

import EnumComponent from "./EnumComponent.js";

class Component {
    constructor(type, data = {}) {
        this._uuid = UUID();

        this._type = type;
        this._data = data;
    }

    GetName() {
        // let [ key, value, _enum ] = EnumComponent._lookup(this._type);
        let [ key ] = EnumComponent._lookup(this._type);

        return key;
    }

    GetType() {
        return this._type;
    }
    SetType(type) {
        this._type = type;

        return this;
    }

    GetData() {
        return this._data;
    }
    SetData(data) {
        this._data = data;
    }

    OnTick(entity) {
        // NOOP
    }

    Serialize() {
        return JSON.stringify(this);
    }
    Deserialize(json) {
        while(typeof json === "string" || json instanceof String) {
            json = JSON.parse(json);
        }

        this._uuid = json._uuid;
        this._type = json._type;
        this._data = json._data;

        return this;
    }
    
    static Deserialize(json) {
        while(typeof json === "string" || json instanceof String) {
            json = JSON.parse(json);
        }

        let clazz = EnumComponent._getClass(json._type),
            comp = new clazz();

        comp._uuid = json._uuid;
        comp._data = json._data;

        return comp;
    }
}

export default Component;