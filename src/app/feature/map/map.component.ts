import { Component, OnInit } from '@angular/core';
import {Waypoint} from './model/Waypoint';
import {MapService} from './service/map.service';
import {marker, latLng, tileLayer} from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  option: any;
  layer = [];
  waypointList: Waypoint[];

  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.mapService.getWaypointList().subscribe(
      wpl => {
        if (wpl != null) {
          this.waypointList = wpl;
          this.option = {
            center: latLng(wpl[0].lat, wpl[0].lng),
            zoom: 4,
            layers: [
              tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'OpenStreetMap'})
            ]
          };
          wpl.forEach(
            wp => this.layer.push(
              marker([wp.lat, wp.lng])
            )
          );
        }
      }
    );
  }

}
