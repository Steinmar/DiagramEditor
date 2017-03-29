import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiargamMenuBtnComponent } from './diargam-menu-btn.component';

describe('DiargamMenuBtnComponent', () => {
  let component: DiargamMenuBtnComponent;
  let fixture: ComponentFixture<DiargamMenuBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiargamMenuBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiargamMenuBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
