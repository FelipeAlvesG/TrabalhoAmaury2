import { TestBed } from '@angular/core/testing';

import { CarrinhoFirebaseService } from './carrinho-firebase.service';

describe('CarrinhoFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarrinhoFirebaseService = TestBed.get(CarrinhoFirebaseService);
    expect(service).toBeTruthy();
  });
});
