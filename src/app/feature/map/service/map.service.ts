import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Waypoint} from '../model/Waypoint';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private waypointList: BehaviorSubject<Waypoint[]> = new BehaviorSubject<Waypoint[]>(null);

  constructor(private http: HttpClient) {
    this.http.get('./assets/data/chapters.json')
      .toPromise()
      .then(c => {
        const tmp: any = c;
        if (tmp.hasOwnProperty('Waypoints')) {
          let wpts: Waypoint[] = Array();
          tmp.Waypoints.map(
            wp => wpts.push(
              {
                lat: Number(wp.lat),
                lng: Number(wp.lng),
                label: wp.label,
                timestamp: Number(wp.timestamp),
              })
          );
          this.waypointList.next(wpts);
        }
      });
  }

  getWaypointList(): Observable<Waypoint[]> {
    return this.waypointList.asObservable();
  }


}
