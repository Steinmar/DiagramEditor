import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[de-diagram-area]'
})
export class DiagramAreaDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}
}
