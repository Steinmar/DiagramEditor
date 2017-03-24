import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeMainMenuBtnComponent } from './de-main-menu-btn.component';

describe('DeMainMenuBtnComponent', () => {
  let component: DeMainMenuBtnComponent;
  let fixture: ComponentFixture<DeMainMenuBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeMainMenuBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeMainMenuBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
