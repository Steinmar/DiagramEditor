import { ISerializable } from './ISerializable';
import { SHAPE_TYPE } from './shape-type.enum';

export class Point implements ISerializable {
    protected _x: number;
    protected _y: number;
    protected type: SHAPE_TYPE;

    constructor (x, y) {
        this._x = x;
        this._y = y;

        // TODO think about this
        // use enum for type check insn't good idea
        // if we want save this value to json
        // type will be broken after type enum change
        this.type = SHAPE_TYPE.line;
    }

    public get x () {
        return this._x;
    }

    public get y () {
        return this._y;
    }

    public serialize () {
        return `{
            x: ${this._x},
            y: ${this._y},
            type: ${this.type}
        }`;
    }
}
