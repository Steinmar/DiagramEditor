import { Point } from './point';
import { ISerializable } from './ISerializable';
import { SHAPE_TYPE } from './shape-type.enum';

export abstract class Shape implements ISerializable {
    startCoords: Point;
    protected type: SHAPE_TYPE;

    public get coordinates (): Point {
        // think about return coorditates copy
        return this.startCoords;
    }

    // get  point and if it on this shape border - return true
    public abstract  isPartOfBorder (p: Point): boolean;

    // returns json of serialized object;
    public abstract serialize (): string;
}
