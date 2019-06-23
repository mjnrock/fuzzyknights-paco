import Component from "./Component.js";
import EnumComponent from "./EnumComponent.js";

class ComponentHunger extends Component {
    constructor() {
        super(EnumComponent.HUNGER, {
            Hunger: 0,
            MaxHunger: 100,
            LastUpdate: Date.now(),
            Duration: 100
        }, {
            STARVE: 1 << 1,
            WEAK: 1 << 2,
            FULL: 1 << 3
        });
    }

    Check(entity) {
        let { Hunger, MaxHunger } = this._data;

        this.SmartFlag("STARVE", Hunger >= MaxHunger);
        this.SmartFlag("WEAK", Hunger >= MaxHunger * 0.75);
    }

    GetHunger() {
        return this._data.Hunger;
    }
    SetHunger(hunger) {
        this._data.Hunger = Math.min(hunger, this._data.MaxHunger);

        return this;
    }
    AddHunger(inc = 1) {
        return this.SetHunger(this.GetHunger() + inc);
    }

    OnTick(entity) {
        this.Check(entity);
         
        if(Date.now() >= this._data.LastUpdate + this._data.Duration) {
            let diff = Date.now() - this._data.LastUpdate,
                inc = diff / this._data.Duration;
                
            this.AddHunger(inc);
            this._data.LastUpdate = Date.now();
        }

        // console.log(`[HUNGER]: ${ this.GetHunger() }`);
    }
}

export default ComponentHunger;