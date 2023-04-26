import { TestBed } from '@angular/core/testing';

import { AddUiService } from './add-ui.service';

describe('AddUiService', () => {
  let service: AddUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
