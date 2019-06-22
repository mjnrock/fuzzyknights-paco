import Component from "./Component.js";
import EnumComponent from "./EnumComponent.js";

class ComponentGrowth extends Component {
    constructor() {
        super(EnumComponent.GROWTH, {
            Stage: 0,
            StartDateTime: Date.now(),
            Duration: 5 * 1000,
            CanGrow: false
        });
    }

    CheckGrowth() {
        if(Date.now() >= this._data.StartDateTime + this._data.Duration) {
            this.CanGrow = true;

            this.Promote();
        } else {
            this.CanGrow = false;
        }
    }
    Promote() {
        console.warn("PROMOTED!");
        
        this.AddStage();
        this._data.StartDateTime = Date.now();
        this._data.Duration = (this._data.Stage || 1) * 60 * 1000;
        this._data.CanGrow = false;

        return this;
    }

    GetStage() {
        return this._data.Stage;
    }
    SetStage(stage) {
        this._data.Stage = stage;

        return this;
    }
    AddStage(inc = 1) {
        return this.SetStage(this.GetStage() + inc);
    }

    OnTick(entity) {
        this.CheckGrowth();
    }
}

export default ComponentGrowth;