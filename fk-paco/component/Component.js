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

    OnTick() {
        // NOOP
    }
}

export default Component;