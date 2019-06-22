import Manager from "./../core/Manager.js";
import Entity from "./Entity.js";

class EntityManager extends Manager {
    constructor(fkp) {
        super(fkp);

        this._entities = {};
    }

    Init({} = {}) {
        //  NOOP
        let ent = new Entity([
            "GROWTH",
            "HUNGER"
        ]);
        this.Register(ent);
    }

    GetEntities() {
        return this._entities;
    }
    SetEntities(ents = {}) {
        this._entities = ents;

        return this;
    }

    Find(uuid) {
        return this._entities[ uuid ];
    }
    Add(entity) {
        if(entity instanceof Entity) {
            this._entities[ entity._uuid ] = entity;
        }

        return this;
    }

    Register(entity) {
        if(entity instanceof Entity) {
            this.Add(entity);
        }

        return this;
    }
    Unregister(entity) {
        if(typeof entity === "string" || entity instanceof String) {
            delete this._entities[ entity ];
         } else if(entity instanceof Entity) {
             delete this._entities[ entity._uuid ];
         }

         return this;
    }

    OnTick() {
        for(let uuid in this._entities) {
            let entity = this._entities[ uuid ];

            entity.OnTick();
        }
    }
}

export default EntityManager;