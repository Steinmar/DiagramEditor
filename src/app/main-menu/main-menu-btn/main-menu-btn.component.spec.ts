import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuBtnComponent } from './main-menu-btn.component';

describe('DeMainMenuBtnComponent', () => {
  let component: MainMenuBtnComponent;
  let fixture: ComponentFixture<MainMenuBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMenuBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
