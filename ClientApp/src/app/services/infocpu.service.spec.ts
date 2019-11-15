import { TestBed } from '@angular/core/testing';

import { InfocpuService } from './infocpu.service';

describe('InfocpuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InfocpuService = TestBed.get(InfocpuService);
    expect(service).toBeTruthy();
  });
});
