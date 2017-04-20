import { Component, OnInit, HostListener, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DiagramAreaDirective } from './add-figure/diagram-area.directive';
import { DraggableDirective } from '../draggable/draggable.directive';
import { DIAGRAM_MENU_BTN_TYPE } from '../diagram-menu/diagram-menu-btn-type.enum';
import { AddFigureService } from './add-figure/add-figure.service';
import { IAddFigComponent } from './add-figure/figures/IAddFigComponent';
import { Observable, Observer, Subject } from 'rxjs/Rx';

@Component({
    selector: 'de-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

    @ViewChild(DiagramAreaDirective) diagramArea: DiagramAreaDirective;

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

    ngOnInit() {
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
                // this.dragStopObserver.next(true);
                break;
            case DIAGRAM_MENU_BTN_TYPE.line:
                // this.dragStopObserver.next(false);
                DraggableDirective.disabled = true;
                break;
            default:
                break;
        }

        (<IAddFigComponent>componentRef.instance).data = data;
    }
}
