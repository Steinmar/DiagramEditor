import { Shape } from './shape';
import { Point } from './point';
import { SHAPE_TYPE } from './shape-type.enum';

export class Line extends Shape {
    endCoords;

    constructor (p0: Point, p1: Point) {
        super();
        this.startCoords = p0;
        this.endCoords = p1;
        this.type = SHAPE_TYPE.line;
    }

    get width () {
        return Math.abs(this.endCoords.x - this.startCoords.x);
    }

    get height () {
        return Math.abs(this.endCoords.y - this.startCoords.y);
    }

    // in line we must check only if point is start
    // od end coordinates
    isPartOfBorder(point: Point) {
        return this.startCoords.equals(point) || this.endCoords.equals(point);
    }

    public serialize () {
        return `{
            p0: ${this.startCoords.serialize()},
            p1: ${this.endCoords.serialize()},
            type: ${this.type}
        }`;
    }
}
