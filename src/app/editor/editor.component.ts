import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'de-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

    constructor() { }

    //TO DO 
    // may be move this to own component because we don't
    // whant to have @HostListener on all diagram component
    @HostListener('keydown', ['$event'])
    nameChanged($event) {
        if ($event.keyCode === 13) {
            $event.preventDefault();
        }
    }

    ngOnInit() {
    }

}
