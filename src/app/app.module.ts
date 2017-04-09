import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DiagramMenuModule } from './diagram-menu/diagram-menu.module';
import { HeaderComponent } from './header/header.component';
import { routing } from './app.routing';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { EditorComponent } from './editor/editor.component';
import { FooterComponent } from './footer/footer.component';
import { SquareComponent } from './editor/AddFigure/figures/square/square.component';
import { LineComponent } from './editor/AddFigure/figures/line/line.component';
import { DiagramAreaDirective } from './editor/AddFigure/diagram-area.directive';
import { AddFigureService } from './editor/AddFigure/add-figure.service';
import { NgDraggableModule } from 'angular-draggable';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FaqComponent,
        AboutComponent,
        EditorComponent,
        FooterComponent,
        SquareComponent,
        LineComponent,
        DiagramAreaDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DiagramMenuModule,
        NgDraggableModule,
        routing
    ],
    providers: [
        AddFigureService
    ],
    entryComponents: [ SquareComponent, LineComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }
