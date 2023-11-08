import { TestBed } from '@angular/core/testing';

import { MisEquiposService } from './mis-equipos.service';

describe('MisEquiposService', () => {
  let service: MisEquiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MisEquiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
