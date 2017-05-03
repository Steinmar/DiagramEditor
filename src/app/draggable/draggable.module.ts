import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraggableDirective } from './draggable.directive';

@NgModule({
  imports: [],
  declarations: [DraggableDirective],
  exports: [ DraggableDirective  ]
})
export class DraggableModule { }
