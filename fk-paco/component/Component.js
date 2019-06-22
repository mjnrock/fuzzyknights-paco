import EnumComponent from "./EnumComponent.js";

class Component {
    constructor(flag, data = {}) {
        this._type = flag;
        this._data = data;
    }

    GetName() {
        return EnumComponent._lookup(this._type);
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
}

export default Component;