import { TestBed } from '@angular/core/testing';

import { AngularComponentService } from './angular-component.service';

describe('AngularComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularComponentService = TestBed.get(AngularComponentService);
    expect(service).toBeTruthy();
  });
});
