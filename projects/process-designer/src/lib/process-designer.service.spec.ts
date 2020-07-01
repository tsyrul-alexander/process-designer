import { TestBed } from '@angular/core/testing';

import { ProcessDesignerService } from './process-designer.service';

describe('ProcessDesignerService', () => {
  let service: ProcessDesignerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessDesignerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
