import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Chapter} from '../model/Chapter';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  private chapterList: BehaviorSubject<Chapter[]> = new BehaviorSubject<Chapter[]>(null);
  private activeChapterSubject: BehaviorSubject<Chapter> = new BehaviorSubject<Chapter>(null);

  constructor(private http: HttpClient) {
    this.http.get('./assets/data/chapters.json')
      .toPromise()
      .then(c => {
        const tmp: any = c;
        if (tmp.hasOwnProperty('Chapters')) {
          let chpts : Chapter[] = Array();
          tmp.Chapters.map(
            ch => chpts.push(
              { pos: Number(ch.pos),
                title: ch.title
              })
          );
          this.chapterList.next(chpts);
        }
      });
  }

  getChapterList(): Observable<Chapter[]> {
    return this.chapterList.asObservable();
  }

  getActiveChapter(): Observable<Chapter> {
    return this.activeChapterSubject.asObservable();
  }

  setActiveChapter(chapter: Chapter): void {
    this.activeChapterSubject.next(chapter);
  }
}
