import { Point } from './point';

export abstract class Shape {
    private coords: Point;

    public get coordinates () {
        // think about return coorditates copy
        return this.coords;
    }

    // get  point and if it on this shape border - return true
    public isPartOfBorder (p: Point) {};
}
