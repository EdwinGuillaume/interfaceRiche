import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoComponent } from './feature/video/video.component';
import { ChapterComponent } from './feature/chapter/chapter.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    ChapterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
