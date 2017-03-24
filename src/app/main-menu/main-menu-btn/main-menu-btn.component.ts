import { Component, Input } from '@angular/core';

@Component({
  selector: 'de-main-menu-btn',
  templateUrl: './main-menu-btn.component.html',
  styleUrls: ['./main-menu-btn.component.scss']
})
export class MainMenuBtnComponent {

  @Input() name: string;

  constructor() { }

}
