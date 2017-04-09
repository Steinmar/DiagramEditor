import { Injectable } from '@angular/core';
import { AdFigure } from './figures/ad-figure';
import { SquareComponent } from './figures/square/square.component';
import { LineComponent } from './figures/line/line.component';
import { DIAGRAM_MENU_BTN_TYPE } from '../../diagram-menu/diagram-menu-btn-type.enum';

@Injectable()
export class AddFigureService {

    getNew(btnType: DIAGRAM_MENU_BTN_TYPE) {
        switch (btnType) {
            case DIAGRAM_MENU_BTN_TYPE.square:
                return new AdFigure(SquareComponent, {});
            case DIAGRAM_MENU_BTN_TYPE.line:
                return new AdFigure(LineComponent, {});
            default:
                return;
        }
    }

}
