import { Injectable } from '@angular/core';
import {Video} from '../model/Video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  video: Video;

  constructor() {

  }

  getVideo(): Video {
    return this.video;
  }
}
