import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[de-diagram-area-size]'
})
export class DiagramAreaSizeDirective {

    getSize () {
        return {
            width: this.el.nativeElement.offsetWidth,
            height: this.el.nativeElement.offsetHeight
        };
    }

    constructor(private el: ElementRef) {}

}
