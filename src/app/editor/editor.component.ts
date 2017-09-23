import { Component, OnInit, HostListener, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DiagramAreaDirective } from './add-figure/diagram-area.directive';
import { DiagramAreaSizeDirective } from './add-figure/diagram-area-size.directive';
import { DraggableDirective } from '../draggable/draggable.directive';
import { DIAGRAM_MENU_BTN_TYPE } from '../diagram-menu/diagram-menu-btn-type.enum';
import { AddFigureService } from './add-figure/add-figure.service';
import { IAddFigComponent } from './add-figure/figures/IAddFigComponent';
import { Observable, Observer } from 'rxjs/Rx';

// TODO build data structure where store information about lines
// between figures (maybe graph)
// don't draw line if it doesn't start and and in squares

@Component({
    selector: 'de-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

    @ViewChild(DiagramAreaDirective) diagramArea: DiagramAreaDirective;
    @ViewChild(DiagramAreaSizeDirective) diagramAreaSize: DiagramAreaSizeDirective;

    mousePos: Observable<any>;
    // TODO use Subject instead Observer for hot Observers
    // read for example this https://medium.com/@benlesh/on-the-subject-of-subjects-in-rxjs-2b08b7198b93
    private mousePosObserver: Observer<any>;
    private drawingLine = false;
    private enableToDrawLine = false;

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
        private addFigureService: AddFigureService) { }

    //TO DO 
    // may be move this to own component because we don't
    // whant to have @HostListener on all diagram component
    @HostListener('keydown', ['$event'])
    nameChanged($event) {
        if ($event.keyCode === 13) {
            $event.preventDefault();
        }
    }

    @HostListener('mousedown', ['$event'])
    mouseDown($event) {
        if (this.enableToDrawLine) {
            this.drawingLine = true;
        }
        this.mousePosObserver.next($event);
    }

    @HostListener('mousemove', ['$event'])
    mouseMove($event) {
        if (!this.enableToDrawLine || !this.drawingLine) {
            return;
        }
        this.mousePosObserver.next($event);
    }

    @HostListener('mouseup', ['$event'])
    mouseUp($event) {
        if (this.enableToDrawLine) {
            this.drawingLine = false;
            this.enableToDrawLine = false;
        }
        this.mousePosObserver.next($event);
    }

    ngOnInit() {
        this.mousePos = new Observable(observer => this.mousePosObserver = observer);
        this.mousePos.subscribe();
    }

    buttonSelected(btnType: DIAGRAM_MENU_BTN_TYPE) {
        /// TODO update this for undo/redo
        let newComp = this.addFigureService.getNew(btnType);
        let componentFactory;
        let viewContainerRef;
        let componentRef;
        let data = {};

        if (!newComp) {
            return;
        }
        componentFactory = this.componentFactoryResolver.resolveComponentFactory(newComp.component);
        viewContainerRef = this.diagramArea.viewContainerRef;
        //if we want delete prev added components
        // we can use viewContainerRef.clear();
        componentRef = viewContainerRef.createComponent(componentFactory);

        switch (btnType) {
            case DIAGRAM_MENU_BTN_TYPE.square:
                DraggableDirective.disabled = false;
                break;
            case DIAGRAM_MENU_BTN_TYPE.line:
                DraggableDirective.disabled = true;
                this.enableToDrawLine = true;
                data = {
                    mousePos: this.mousePos,
                    areaSize: this.diagramAreaSize.getSize()
                };
                break;
            default:
                break;
        }

        (<IAddFigComponent>componentRef.instance).data = data;
    }
}
