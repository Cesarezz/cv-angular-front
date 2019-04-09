import { TestBed } from '@angular/core/testing';

import { KnowledgeTypeService } from './knowledge-type.service';

describe('KnowledgeTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnowledgeTypeService = TestBed.get(KnowledgeTypeService);
    expect(service).toBeTruthy();
  });
});
