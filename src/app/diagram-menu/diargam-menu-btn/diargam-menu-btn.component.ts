import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'de-diargam-menu-btn',
  templateUrl: './diargam-menu-btn.component.html',
  styleUrls: ['./diargam-menu-btn.component.scss']
})
export class DiargamMenuBtnComponent implements OnInit {

  @Input() btnType;

  public mouseisDown: boolean;
  public btnClass: string;

  ngOnInit() {

  }

}
