import { Component, OnInit, Input } from '@angular/core';
import { DIAGRAM_MENU_BTN_TYPE } from '../diagram-menu-btn-type.enum';

@Component({
  selector: 'de-diargam-menu-btn',
  templateUrl: './diargam-menu-btn.component.html',
  styleUrls: ['./diargam-menu-btn.component.scss']
})
export class DiargamMenuBtnComponent implements OnInit {

  @Input() btnType: DIAGRAM_MENU_BTN_TYPE;

  public btnClass: string;

  ngOnInit() {
    switch (this.btnType) {
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

}
