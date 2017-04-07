import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgDraggableModule } from 'angular-draggable';
import { DiagramMenuComponent } from './diagram-menu.component';
import { DiargamMenuBtnComponent } from './diargam-menu-btn/diargam-menu-btn.component';

@NgModule({
    imports: [
        CommonModule,
        NgDraggableModule
    ],
    exports: [DiagramMenuComponent],
    declarations: [DiagramMenuComponent, DiargamMenuBtnComponent]
})
export class DiagramMenuModule { }
