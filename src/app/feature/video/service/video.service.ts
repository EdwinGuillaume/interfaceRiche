import { Injectable } from '@angular/core';
import {Video} from '../model/Video';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  video: BehaviorSubject<Video> = new BehaviorSubject<Video>(null);;

  constructor(private http: HttpClient) {
    this.http.get('./assets/data/chapters.json')
      .toPromise()
      .then(c => {
        const tmp: any = c;
        if (tmp.hasOwnProperty('Film')) {
          this.video.next(tmp.Film);
        }
      });
  }

  getVideo(): Observable<Video> {
    return this.video.asObservable();
  }
}
