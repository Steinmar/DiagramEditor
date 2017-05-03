import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IAddFigComponent } from '../IAddFigComponent';
import { Observable, Observer } from 'rxjs/Rx';

@Component({
    selector: 'de-square',
    templateUrl: './square.component.html',
    styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit, IAddFigComponent {

    @Input() data: any;

    ngOnInit() {
    }
}
