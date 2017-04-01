import { Component, EventEmitter, Input, OnInit, Output, HostListener } from '@angular/core';
import { DIAGRAM_MENU_BTN_TYPE } from '../diagram-menu-btn-type.enum';
import { IDiagramMenuBtn } from '../IDiagramMenuBtn';

@Component({
  selector: 'de-diargam-menu-btn',
  templateUrl: './diargam-menu-btn.component.html',
  styleUrls: ['./diargam-menu-btn.component.scss']
})
export class DiargamMenuBtnComponent implements OnInit {

  @Input() data: IDiagramMenuBtn;
  @Output() pressed = new EventEmitter<DIAGRAM_MENU_BTN_TYPE>();

  btnClass: string;
  mouseisDown: boolean;

  @HostListener('mouseup', ['$event'])
  onMouseUp(event) {
    this.mouseisDown = false;
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event) {
    this.mouseisDown = true;
  }

  ngOnInit() {
    switch (this.data.type) {
      case DIAGRAM_MENU_BTN_TYPE.square:
        this.btnClass = 'diagram-menu-btn__square';
        break;
      case DIAGRAM_MENU_BTN_TYPE.line:
      this.btnClass = 'diagram-menu-btn__line';
        break;
      case DIAGRAM_MENU_BTN_TYPE.undo:
        this.btnClass = 'diagram-menu-btn__undo';
        break;
      case DIAGRAM_MENU_BTN_TYPE.redo:
        this.btnClass = 'diagram-menu-btn__redo';
        break;
      default:
        this.btnClass = 'diagram-menu-btn__square';
        break;
    }
  }

  press(type: DIAGRAM_MENU_BTN_TYPE) {
    this.pressed.emit(type);
  }

}
