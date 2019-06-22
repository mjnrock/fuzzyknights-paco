import Component from "./Component.js";
import EnumComponent from "./EnumComponent.js";

class ComponentHunger extends Component {
    constructor() {
        super(EnumComponent.HUNGER, {
            Hunger: 0,
            MaxHunger: 100,
            Rate: 250
        });
    }

    Check(entity) {
        let { Hunger, MaxHunger } = this._data;

        if(Hunger === MaxHunger) {
            //TODO: Add STATE.DEAD Flag
        } else if(Hunger <= MaxHunger * 0.75) {
            //TODO: Add STATE.WEAK Flag
        } else {
            //TODO: Remove STATE.WEAK Flag
        }
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
        
        let { Hunger, MaxHunger } = this._data;

        console.log(`[Hunger]: ${ this.GetHunger() }`);

        if(Hunger < MaxHunger) {
            this.AddHunger(1);
        } else if (Hunger === MaxHunger) {
            console.warn("Resetting Hunger");
            this.SetHunger(0);
        } else {
            console.info("MAX HUNGER", this.GetHunger());
        }
    }
}

export default ComponentHunger;