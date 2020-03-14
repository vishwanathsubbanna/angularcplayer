import { TestBed } from '@angular/core/testing';

import { TopicContentService } from './topic-content.service';

describe('TopicContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopicContentService = TestBed.get(TopicContentService);
    expect(service).toBeTruthy();
  });
});
