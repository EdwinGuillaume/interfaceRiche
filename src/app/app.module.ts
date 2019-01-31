import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { VideoComponent } from './feature/video/video.component';
import { ChapterComponent } from './feature/chapter/chapter.component';
import { HttpClientModule} from '@angular/common/http';
import { MapComponent } from './feature/map/map.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    ChapterComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
