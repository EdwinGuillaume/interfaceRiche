import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  // chapterList:
  activeChapterSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  getActiveChatper(): Observable<string> {
    return this.activeChapterSubject.asObservable();
  }
}
