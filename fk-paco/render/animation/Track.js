import { UUID } from "./../../utility/Helper.js";

class Track {
    constructor(img, sequence = []) {
        this._uuid = UUID();

        this._image = img;
        this._sequence = sequence;

        this._index = 0;
        this._lastUpdate = null;
    }

    Get() {
        //  image, sx, sy, sw, sh
        return [
            this._image,
            512 * this._index,
            0,
            512,
            512
        ];
    }

    Next(time) {
        if(time >= this._lastUpdate + this._sequence[ this._index ][ 1 ]) {
            ++this._index;

            if(this._index >= this._sequence.length) {
                this._index = 0;
            }

            this._lastUpdate = time;

            return true;
        }

        return false;
    }

    Reset() {
        this._index = 0;
        this._lastUpdate = null;

        return this;
    }
}

export default Track;