import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeMainMenuBtnComponent } from './de-main-menu-btn/de-main-menu-btn.component';
import { DeMainMenuComponent } from './de-main-menu/de-main-menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DeMainMenuBtnComponent, DeMainMenuComponent],
  declarations: [DeMainMenuBtnComponent, DeMainMenuComponent]
})
export class DeMainMenuModule { }
