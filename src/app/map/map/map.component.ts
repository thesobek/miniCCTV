import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { Map } from 'leaflet';
import * as MapConfig from '../map-config';

@Component({
  selector: 'app-map',
  template: '',
  styleUrls: ['./map.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {
  private map: Map;

  constructor(private elementRef: ElementRef) {}

  get baseMap() {
    return this.map;
  }

  ngOnInit() {
    this.map = new Map(this.elementRef.nativeElement);
    this.map.setView(MapConfig.DEFAULT_INITIAL_CENTER, MapConfig.DEFAULT_INITIAL_ZOOM);
  }
}
