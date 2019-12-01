import { TestBed } from '@angular/core/testing';

import { ProdutoFirebaseService } from './produto-firebase.service';

describe('ProdutoFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdutoFirebaseService = TestBed.get(ProdutoFirebaseService);
    expect(service).toBeTruthy();
  });
});
