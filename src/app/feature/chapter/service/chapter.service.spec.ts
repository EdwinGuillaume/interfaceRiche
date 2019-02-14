import { TestBed } from '@angular/core/testing';

import { ChapterService } from './chapter.service';
import {HttpClientModule} from '@angular/common/http';

describe('ChapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ChapterService = TestBed.get(ChapterService);
    expect(service).toBeTruthy();
  });
});
