import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapModule } from './map/map.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { reducers } from './reducers';
import { CamerasModule } from './cameras/cameras.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MapModule,
    CamerasModule,
    SearchModule,
    FlexLayoutModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
