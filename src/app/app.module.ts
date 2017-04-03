import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MainMenuModule } from './main-menu/main-menu.module';
import { DiagramMenuModule } from './diagram-menu/diagram-menu.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainMenuModule,
    DiagramMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
