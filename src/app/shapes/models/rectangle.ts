import { Point } from './point';
import { Shape } from './shape';
import { SHAPE_TYPE } from './shape-type.enum';

export class Rectangle extends Shape {
    protected endCoords;

    constructor (p0: Point, p1: Point) {
        super();
        this.coords = p0;
        this.endCoords = p1;
        this.type = SHAPE_TYPE.rectandle;
    }

    public isPartOfBorder(point: Point) {
        let onAxisX = point.x >= this.coords.x && point.x <= this.endCoords.x && 
            (point.y === this.coords.y || point.y === this.endCoords.y);
        let onAxisY = point.y >= this.coords.y && point.y <= this.endCoords.y && 
            (point.x === this.coords.x || point.x === this.endCoords.x);

        return onAxisX || onAxisY;
    }

    public serialize () {
        return `{
            p0: ${this.coords.serialize()},
            p1: ${this.coords.serialize()},
            type: ${this.type}
        }`;
    }
}
