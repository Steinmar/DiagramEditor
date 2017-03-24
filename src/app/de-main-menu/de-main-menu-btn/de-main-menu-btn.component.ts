import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-de-main-menu-btn',
  templateUrl: './de-main-menu-btn.component.html',
  styleUrls: ['./de-main-menu-btn.component.scss']
})
export class DeMainMenuBtnComponent {

  @Input() name: string;

  constructor() { }

}
