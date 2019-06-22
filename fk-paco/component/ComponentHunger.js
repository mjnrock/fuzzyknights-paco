import Component from "./Component.js";
import EnumComponent from "./EnumComponent.js";

class ComponentHunger extends Component {
    constructor() {
        super(EnumComponent.HUNGER, {
            Hunger: 0,
            MaxHunger: 100,
            Rate: 250
        }, {
            STARVE: 1 << 1,
            WEAK: 1 << 2
        });
    }

    Check(entity) {
        let { Hunger, MaxHunger } = this._data;

        if(Hunger >= MaxHunger) {
            this.AddMask(this.GetFlag("STARVE"));
        } else if(Hunger >= MaxHunger * 0.75) {
            this.AddMask(this.GetFlag("WEAK"));
        } else {
            this.RemoveMask(this.GetFlag("STARVE"));
            this.RemoveMask(this.GetFlag("WEAK"));
        }

        console.log(this.MaskToString());
    }

    GetHunger() {
        return this._data.Hunger;
    }
    SetHunger(stage) {
        this._data.Hunger = stage;

        return this;
    }
    AddHunger(inc = 1) {
        return this.SetHunger(this.GetHunger() + inc);
    }

    OnTick(entity) {
        this.Check(entity);
            
        this.AddHunger(1);
    }
}

export default ComponentHunger;