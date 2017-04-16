import { Component, Input } from '@angular/core';
import { IAddFigComponent } from '../IAddFigComponent';

@Component({
    selector: 'de-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.scss']
})
export class SquareComponent implements IAddFigComponent {
    @Input() data: any;
}
