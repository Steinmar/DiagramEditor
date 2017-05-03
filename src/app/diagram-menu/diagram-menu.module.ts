import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableModule } from '../draggable/draggable.module';
import { DiagramMenuComponent } from './diagram-menu.component';
import { DiargamMenuBtnComponent } from './diargam-menu-btn/diargam-menu-btn.component';

@NgModule({
    imports: [
        CommonModule,
        DraggableModule
    ],
    exports: [DiagramMenuComponent],
    declarations: [DiagramMenuComponent, DiargamMenuBtnComponent]
})
export class DiagramMenuModule { }
