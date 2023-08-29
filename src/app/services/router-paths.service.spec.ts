import { TestBed } from '@angular/core/testing';

import { RouterPathsService } from './router-paths.service';

describe('RouterPathsService', () => {
  let service: RouterPathsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterPathsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
