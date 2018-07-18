import { Component, Input, OnDestroy } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { tileLayer, TileLayer } from 'leaflet' ;


@Component({
  selector: 'app-tile-layer',
  template: ''
})
export class TileLayerComponent implements OnDestroy {

  private layer: TileLayer;
  private _url = '';

  @Input()
  set url(value) {
      this._url = value;
      this.createLayer();
  }
  get url() {
      return this._url;
  }

  constructor(private vmxMap: MapComponent) {}

  ngOnDestroy() {
    this.clearLayer();
  }

  createLayer() {
    this.clearLayer();
    this.layer = tileLayer(this.url);
    this.layer.addTo(this.vmxMap.baseMap);
  }

  private clearLayer() {
    if (!this.layer) { return; }

    this.layer.remove();
  }
}
