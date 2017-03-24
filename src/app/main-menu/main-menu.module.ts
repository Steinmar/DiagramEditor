import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuBtnComponent } from './main-menu-btn/main-menu-btn.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MainMenuBtnComponent, MainMenuComponent],
  declarations: [MainMenuBtnComponent, MainMenuComponent]
})
export class MainMenuModule { }
