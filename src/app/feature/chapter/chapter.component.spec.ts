import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { ChapterComponent } from './chapter.component';
import {MatMenuModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChapterService} from './service/chapter.service';

describe('ChapterComponent', () => {
  let component: ChapterComponent;
  let chapterService: ChapterService;
  let fixture: ComponentFixture<ChapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatMenuModule, BrowserAnimationsModule],
      declarations: [ ChapterComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterComponent);
    chapterService = fixture.debugElement.injector.get(ChapterService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',() => {
      expect(component).toBeTruthy();
    }
  );
});
