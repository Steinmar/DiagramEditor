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
    draggableChanges: Observable<boolean>;
    private draggableObserver: Observer<boolean>;

    ngOnInit() {
        this.draggableChanges = new Observable(observer => this.draggableObserver = observer);

        if (this.data.dragStopObservable) {
            this.data.dragStopObservable.subscribe(draggable => {
                this.draggableObserver.next(draggable);
            });
        }
    }
}
