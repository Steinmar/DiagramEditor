import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'de-diargam-menu-btn',
  templateUrl: './diargam-menu-btn.component.html',
  styleUrls: ['./diargam-menu-btn.component.scss']
})
export class DiargamMenuBtnComponent implements OnInit {
  public mouseisDown: boolean;

  constructor() {
    this.mouseisDown = false;
  }

  //TODO move this to the direcitve
  @HostListener('mousedown', ['$event']) onMouseDown(event) {
        this.mouseisDown = true;
  }

  @HostListener('mouseup', ['$event']) onMouseUp(event) {
        this.mouseisDown = false;
  }

  ngOnInit() {
  }

}
