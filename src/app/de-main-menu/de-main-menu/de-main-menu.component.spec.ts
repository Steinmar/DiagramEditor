import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeMainMenuComponent } from './de-main-menu.component';

describe('DeMainMenuComponent', () => {
  let component: DeMainMenuComponent;
  let fixture: ComponentFixture<DeMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
