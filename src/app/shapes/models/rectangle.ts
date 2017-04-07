import { Point } from './point';
import { Shape } from './shape';
import { SHAPE_TYPE } from './shape-type.enum';

export class Rectangle extends Shape {
    protected endCoords;

    constructor (p0: Point, p1: Point) {
        super();
        this.startCoords = p0;
        this.endCoords = p1;
        this.type = SHAPE_TYPE.rectandle;
    }

    public isPartOfBorder(point: Point) {
        let onAxisX = point.x >= this.startCoords.x && point.x <= this.endCoords.x &&
                      (point.y === this.startCoords.y || point.y === this.endCoords.y);

        let onAxisY = point.y >= this.startCoords.y && point.y <= this.endCoords.y &&
                      (point.x === this.startCoords.x || point.x === this.endCoords.x);

        return onAxisX || onAxisY;
    }

    public serialize () {
        return `{
            p0: ${this.startCoords.serialize()},
            p1: ${this.endCoords.serialize()},
            type: ${this.type}
        }`;
    }
}
