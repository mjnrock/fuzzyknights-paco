import { UUID } from "./../utility/Helper.js";
import EnumComponent from "../component/EnumComponent.js";
import Bitwise from "../utility/Bitwise.js";

class Watcher {
    constructor(entity) {
        this._uuid = UUID();

        this._entity = entity;
        this._handlers = [];

        this.Register(
            (e, _) => {
                if(Bitwise.Has(_.HUNGER.GetMask(), _.HUNGER.GetFlag("STARVE"))) {
                    console.log("IS STARVING");
                }
                if(Bitwise.Has(_.HUNGER.GetMask(), _.HUNGER.GetFlag("WEAK"))) {
                    console.log("WEAK");
                }

                if(Bitwise.Has(_.STAGE.GetMask(), _.STAGE.GetFlag("PROMOTE"))) {
                    _.STAGE.Promote();
                }
            }
        )
    }

    // SubSetComponents(...keys) {
    //     let comps = this._entity._components.filter((comp) => keys.includes(comp.GetName()));

    //     let ret = {};
    //     for(let i in this._entity._components) {
    //         let comp = this._entity._components[ i ];

    //         if(keys.includes(comp.GetName())) {
    //             ret[ comp.GetName() ] = {
    //                 MASK:
    //             };
    //         }
    //     }
    // }

    GetEntity() {
        return this._entity;
    }
    SetEntity(entity) {
        this._entity = entity;

        return this;
    }

    Register(...handlers) {
        for(let i in handlers) {
            let handler = handlers[ i ];
            
            if(typeof handler === "function") {
                this._handlers.push(handler);   
            }
        }

        return this;
    }

    OnTick() {
        for(let i in this._handlers) {
            let handler = this._handlers[ i ];

            handler(this._entity, this._entity._components);
        }
    }
}

export default Watcher;