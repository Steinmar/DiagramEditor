import { Component, OnInit, Input } from '@angular/core';
import { IAddFigComponent } from '../IAddFigComponent';
import { Line } from '../../../../shapes/models/line';
import { Point } from '../../../../shapes/models/point';

interface ILineContainer {
    top: number;
    left: number;
    width: number;
    height: number;
    zIndex: number;
}

@Component({
    selector: 'de-line',
    templateUrl: './line.component.html',
    styleUrls: ['./line.component.scss']
})
// I don't know what is better so I choosed drawing svg with sizes like diagram area size.
// After a line have drawed svg container change size to line sizes
export class LineComponent implements OnInit, IAddFigComponent {
    @Input() data: any;

    lineContainer: ILineContainer;
    line: Line;

    ngOnInit() {
        const areaSize = this.data.areaSize;
        this.lineContainer = {
            width: areaSize.width,
            height: areaSize.height,
            top: 0,
            left: 0,
            zIndex: 100
        };

        let subscription = this.data.mousePos
            .subscribe(event => {
                const x = event.offsetX;
                const y = event.offsetY;

                switch (event.type) {
                    case 'mouseup':
                        this.line.endCoords = new Point(x, y);
                        this.lineContainer.zIndex = 0;
                        subscription.unsubscribe();
                        break;
                    case 'mousemove':
                        this.line.endCoords = new Point(x, y);
                        break;
                    case 'mousedown':
                        const currPoint = new Point(x, y);
                        this.line = new Line(currPoint, currPoint);
                        break;
                    default:
                        break;
                }
            });
    }
}
