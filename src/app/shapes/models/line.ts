import { Shape } from './shape';
import { Point } from './point';
import { SHAPE_TYPE } from './shape-type.enum';

export class Line extends Shape {
    protected endCoords;

    constructor (p0: Point, p1: Point) {
        super();
        this.coords = p0;
        this.endCoords = p1;
        this.type = SHAPE_TYPE.line;
    }

    public isPartOfBorder(point: Point) {
        // TODO
        // code mathimatical alg that check this
        return true;
    }

    public serialize () {
        return `{
            p0: ${this.coords.serialize()},
            p1: ${this.coords.serialize()},
            type: ${this.type}
        }`;
    }
}
