import { UUID } from "./../utility/Helper.js"
import Bitwise from "./../utility/Bitwise.js";

import EnumComponent from "./EnumComponent.js";

class Component {
    constructor(type, data = {}, flags = {}) {
        this._uuid = UUID();

        this._type = type;
        this._data = data;

        this._flags = flags;
        this._mask = 0;
    }

    Check(entity) {
        // NOOP
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

    GetFlag(key) {
        return this._flags[ key ];
    }
    GetFlags() {
        return this._flags;
    }
    SetFlags(flags = {}) {
        this._flags = flags;

        return this;
    }
    AddFlag(key, value) {
        this._flags[ key ] = value;

        return this;
    }
    RemoveFlag(key) {
        delete this._flags[ key ];

        return this;
    }

    GetMask() {
        return this._mask;
    }
    SetMask(mask = 0) {
        this._mask = mask;
        
        return this;
    }
    AddMask(mask) {
        this._mask = Bitwise.Add(this._mask, mask);

        return this;
    }
    RemoveMask(mask) {
        this._mask = Bitwise.Remove(this._mask, mask);

        return this;
    }
    HasMask(mask) {
        return Bitwise.Has(this._mask, mask);
    }

    MaskToString() {
        let _enum = Object.entries(this._flags),
            keys = [];

        _enum.forEach(([ key, value]) => {
            if(Bitwise.Has(this._mask, value)) {
                keys.push(key);
            }
        });

        return keys;
    }

    GetData() {
        return this._data;
    }
    SetData(data) {
        this._data = data;
    }

    OnTick(entity) {
        this.Check(entity);
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