import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Video} from './model/Video';
import {VideoService} from './service/video.service';
import {ChapterService} from '../chapter/service/chapter.service';
import {Chapter} from '../chapter/model/Chapter';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  video: Video;
  activeChapter: Chapter;
  @ViewChild('videoER') private videoER: ElementRef;

  constructor(private videoService: VideoService,
              private chapterService: ChapterService) { }

  ngOnInit() {
    this.videoService.getVideo().subscribe(
      v => {
        if (v != null) {
          this.video = v;
        }
      }
    );
    this.chapterService.getActiveChapter().subscribe(
      ac => {
        if (ac != null) {
          this.videoER.nativeElement.currentTime = ac.pos;
        }
      }
    );
  }

}
