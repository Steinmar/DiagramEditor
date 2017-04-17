import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IAddFigComponent } from '../IAddFigComponent';

@Component({
    selector: 'de-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit, IAddFigComponent {

    @Input() data: any;
    // @Output() drawLine: EventEmitter<any>;
    draggable: boolean;

    ngOnInit() {
        this.draggable = false;
    }

    startLine($event) {
        this.draggable = false;
        // this.drawLine.emit($event);
    }
}
