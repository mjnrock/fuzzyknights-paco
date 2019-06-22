import Component from "./Component.js";
import EnumComponent from "./EnumComponent.js";

class ComponentGrowth extends Component {
    constructor() {
        super(EnumComponent.GROWTH, {
            Stage: 0
        });
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

    OnTick() {
        //  NOOP
    }
}

export default ComponentGrowth;