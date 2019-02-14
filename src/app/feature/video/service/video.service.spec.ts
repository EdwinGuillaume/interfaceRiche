import { TestBed } from '@angular/core/testing';

import { VideoService } from './video.service';
import {HttpClientModule} from '@angular/common/http';

describe('VideoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: VideoService = TestBed.get(VideoService);
    expect(service).toBeTruthy();
  });
});
