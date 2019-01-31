import { Component, OnInit } from '@angular/core';
import {Chapter} from './model/Chapter';
import {ChapterService} from './service/chapter.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  chapterList: Chapter[];

  constructor(private chapterService: ChapterService) { }

  ngOnInit() {
    this.chapterService.getChapterList()
      .subscribe(cl => {
        this.chapterList = cl;
      });
  }

  changeChapter(chapter: Chapter): void {
    this.chapterService.setActiveChapter(chapter);
  }

}
