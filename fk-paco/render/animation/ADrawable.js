import { UUID } from "../../utility/Helper.js";

class ADrawable {
    constructor() {
        this._uuid = UUID();

        this._canvas = document.createElement("canvas");

        this._canvas.id = this._uuid;
        this._canvas.width = 512;
        this._canvas.height = 512;
        
        this._context = this._canvas.getContext("2d");
    }
}

export default ADrawable;