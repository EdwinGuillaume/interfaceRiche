import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MapComponent} from './feature/map/map.component';
import {VideoComponent} from './feature/video/video.component';
import {ChapterComponent} from './feature/chapter/chapter.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MapComponent,
        VideoComponent,
        ChapterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
