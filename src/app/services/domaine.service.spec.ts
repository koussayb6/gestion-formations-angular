import { TestBed } from '@angular/core/testing';

import { Domaine } from './domaine.service';

describe('EquipeService', () => {
  let service: Domaine;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Domaine);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
