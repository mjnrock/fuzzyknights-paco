import Component from "./Component.js";
import EnumComponent from "./EnumComponent.js";

class ComponentStage extends Component {
    constructor() {
        super(EnumComponent.STAGE, {
            Stage: 0,
            StartDateTime: Date.now(),
            Duration: 5 * 1000
        });
    }

    Check(entity) {
        if(Date.now() >= this._data.StartDateTime + this._data.Duration) {
            return true;
        }
        
        return false;
    }

    Promote() {
        console.warn("PROMOTED!");

        this.AddStage();
        this._data.StartDateTime = Date.now();
        this._data.Duration = (this._data.Stage || 1) * 60 * 1000;

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
        this.Check(entity);
    }
}

export default ComponentStage;