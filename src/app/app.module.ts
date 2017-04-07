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

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FaqComponent,
        AboutComponent,
        EditorComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        DiagramMenuModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
