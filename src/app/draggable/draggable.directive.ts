import {
    Directive,
    ElementRef,
    Renderer,
    OnDestroy,
    OnInit,
    AfterViewInit,
    Input,
    HostListener
} from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Directive({
    selector: '[de-draggable]',
    host: {
        '(dragstart)': 'onDragStart($event)',
        '(dragend)': 'onDragEnd($event)',
        '(drag)': 'onDrag($event)'
    }
})
export class DraggableDirective implements OnDestroy, OnInit, AfterViewInit {
    private deltaX= 0;
    private deltaY = 0;

    private canDrag = true;

    @Input() draggableChanges: Observable<boolean>;

    @Input('draggable')
    set draggable(val: any) {
        if (val === undefined || val === null || val === '') {
            return;
        };
        this.canDrag = !!val;
    }
    private mustBePosition: Array<string> = ['absolute', 'fixed', 'relative'];
    constructor(private el: ElementRef, private renderer: Renderer) {}

    ngOnInit(): void {
        this.renderer.setElementAttribute(this.el.nativeElement, 'draggable', 'true');
        this.listenDragable();
    }
    ngAfterViewInit() {
        try {
            const position = window.getComputedStyle(this.el.nativeElement).position;
            if (this.mustBePosition.indexOf(position) === -1) {
                console.warn(this.el.nativeElement, 'Must be having position attribute set to ' + this.mustBePosition.join('|'));
            }
        } catch (ex) {
            console.error(ex);
        }
    }
    ngOnDestroy(): void {
        this.renderer.setElementAttribute(this.el.nativeElement, 'draggable', 'false');
    }

    onDragStart(event: MouseEvent) {
        if (!this.canDrag) {
            return;
        }
        this.deltaX = event.x - this.el.nativeElement.offsetLeft;
        this.deltaY = event.y - this.el.nativeElement.offsetTop;
    }

    onDrag(event: MouseEvent) {
        if (!this.canDrag) {
            return;
        }
        this.doTranslation(event.x, event.y);
    }

    onDragEnd(event: MouseEvent) {
        this.deltaX = 0;
        this.deltaY = 0;
    }

    doTranslation(x: number, y: number) {
        if (!x || !y) {
            return;
        };
        this.renderer.setElementStyle(this.el.nativeElement, 'top', (y - this.deltaY) + 'px');
        this.renderer.setElementStyle(this.el.nativeElement, 'left', (x - this.deltaX) + 'px');
    }

    private listenDragable() {
        if (!this.draggableChanges) {
            return;
        }
        this.draggableChanges.subscribe(val => {
            console.info(val);
            this.canDrag = val;
        });
    }
}

