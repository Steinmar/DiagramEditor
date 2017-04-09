import { TestBed, inject } from '@angular/core/testing';

import { AddFigureService } from './add-figure.service';

describe('AddFigureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddFigureService]
    });
  });

  it('should ...', inject([AddFigureService], (service: AddFigureService) => {
    expect(service).toBeTruthy();
  }));
});
