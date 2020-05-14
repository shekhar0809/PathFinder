import { TestBed } from '@angular/core/testing';

import { AlgorithmSupplierService } from './algorithm-supplier.service';

describe('AlgorithmSupplierService', () => {
  let service: AlgorithmSupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgorithmSupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
