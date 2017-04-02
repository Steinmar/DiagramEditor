import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Shapes must be separate module
// may be not angular
// TODO think about this

// UPD in this module we store math models of Shapes
// and directives that'll work with shapers in DOM

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ShapesModule { }
