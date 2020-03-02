import { TestBed } from '@angular/core/testing';

import { IceandfireService } from './iceandfire.service';

describe('IceandfireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IceandfireService = TestBed.get(IceandfireService);
    expect(service).toBeTruthy();
  });
});
