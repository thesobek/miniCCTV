import { NgModule } from '@angular/core';
import { MapComponent } from './map/map.component';
import { configureMarker } from './leaflet-marker.config';
import { TileLayerComponent } from './tile-layer/tile-layer.component';

const components = [
  MapComponent,
  TileLayerComponent
];

@NgModule({
  exports: [...components],
  declarations: [...components],
})
export class MapModule {
  constructor() {
    configureMarker();
  }
}
