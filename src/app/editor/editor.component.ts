import { Component, OnInit, HostListener, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DiagramAreaDirective } from './AddFigure/diagram-area.directive';
import { DIAGRAM_MENU_BTN_TYPE } from '../diagram-menu/diagram-menu-btn-type.enum';

@Component({
    selector: 'de-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

     @ViewChild(DiagramAreaDirective) diagramArea: DiagramAreaDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

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

    buttonSelected(btn: DIAGRAM_MENU_BTN_TYPE) {
        
    }
}
