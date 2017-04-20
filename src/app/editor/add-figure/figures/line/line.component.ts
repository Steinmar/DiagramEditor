import { Component, OnInit, Input } from '@angular/core';
import { IAddFigComponent } from '../IAddFigComponent';
import { Line } from '../../../../shapes/models/line';
import { Point } from '../../../../shapes/models/point';


@Component({
    selector: 'de-line',
    templateUrl: './line.component.html',
    styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit, IAddFigComponent {
    @Input() data: any;

    line: Line;

    ngOnInit() {
        this.line = new Line(new Point(0, 0), new Point(0, 0));

        let subscription = this.data.mousePos.subscribe(event => {
            // console.log(event);
            switch (event.type) {
                case 'mouseup':
                    this.line.endCoords = new Point(event.offsetX, event.offsetY);
                    break;
                case 'mousemove':
                    this.line.endCoords = new Point(event.offsetX, event.offsetY);
                    break;
                case 'mousedown':
                    this.line.startCoords = new Point(event.offsetX, event.offsetY);
                    // subscription.unsubscribe();
                    break;
                default:
                    return;
            }
        });
    }
}
