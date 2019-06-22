import Component from "./package.js";

const EnumComponent = {
    GROWTH: 1 << 0,
    HUNGER: 1 << 1
};

EnumComponent._lookup = (input) => {
    for(let key in EnumComponent) {
        let _enum = EnumComponent[ key ];

        if(_enum === input) {
            return [ key, _enum, EnumComponent ];
        }
    }

    return null;
};

EnumComponent._getClass = (key) => {
    key = key.toUpperCase();

    switch(key) {
        case "GROWTH":
            return Component.ComponentGrowth;
        default:
            return null;
    }
}

export default EnumComponent;