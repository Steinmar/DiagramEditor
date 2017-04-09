import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[deDiagramArea]'
})
export class DiagramAreaDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
