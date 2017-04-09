import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { DIAGRAM_MENU_BTN_TYPE } from './diagram-menu-btn-type.enum';
import { IDiagramMenuBtn } from './IDiagramMenuBtn';

@Component({
    selector: 'de-diagram-menu',
    templateUrl: './diagram-menu.component.html',
    styleUrls: ['./diagram-menu.component.scss']
})
export class DiagramMenuComponent implements OnInit {

    @Output() btnPressed = new EventEmitter<DIAGRAM_MENU_BTN_TYPE>();

    public buttons: IDiagramMenuBtn[];

    ngOnInit() {
        // may be in future we'll get this data from api
        this.buttons = [
            {
                type: DIAGRAM_MENU_BTN_TYPE.square,
                title: 'add new square'
            },
            {
                type: DIAGRAM_MENU_BTN_TYPE.line,
                title: 'add new line'
            },
            {
                type: DIAGRAM_MENU_BTN_TYPE.undo,
                title: 'undo'
            },
            {
                type: DIAGRAM_MENU_BTN_TYPE.redo,
                title: 'redo'
            },
        ];
    }

    btnPress(btnType: DIAGRAM_MENU_BTN_TYPE) {
        this.btnPressed.emit(btnType);
    }
}
