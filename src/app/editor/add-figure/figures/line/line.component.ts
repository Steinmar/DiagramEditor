import { Component, OnInit, Input } from '@angular/core';
import { IAddFigComponent } from '../IAddFigComponent';


@Component({
    selector: 'de-line',
    templateUrl: './line.component.html',
    styleUrls: ['./line.component.scss']
})
export class LineComponent implements IAddFigComponent {
    @Input() data: any;

    width: number;
    height: number;
}
