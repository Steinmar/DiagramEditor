import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2DraggableModule } from 'ng2-draggable';
import { DiagramMenuComponent } from './diagram-menu.component';
import { DiargamMenuBtnComponent } from './diargam-menu-btn/diargam-menu-btn.component'; 

@NgModule({
  imports: [
    CommonModule,
    Ng2DraggableModule
  ],
  exports: [DiagramMenuComponent],
  declarations: [DiagramMenuComponent, DiargamMenuBtnComponent]
})
export class DiagramMenuModule { }
