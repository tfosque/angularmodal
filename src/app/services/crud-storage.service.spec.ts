/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrudStorageService } from './crud-storage.service';

describe('Service: CrudStorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudStorageService]
    });
  });

  it('should ...', inject([CrudStorageService], (service: CrudStorageService) => {
    expect(service).toBeTruthy();
  }));
});
