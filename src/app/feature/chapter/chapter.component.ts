import {Component, OnInit, ViewChild} from '@angular/core';
import {Chapter} from './model/Chapter';
import {ChapterService} from './service/chapter.service';
import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  chapterList: Chapter[];
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private chapterService: ChapterService) { }

  ngOnInit() {
    this.chapterService.getChapterList()
      .subscribe(cl => {
        this.chapterList = cl;
      });
    this.trigger.openMenu();
  }

  changeChapter(chapter: Chapter): void {
    this.chapterService.setActiveChapter(chapter);
  }

}
