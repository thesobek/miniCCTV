import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { CamerasListComponent } from './components/cameras-list/cameras-list.component';

const components = [
  CamerasListComponent
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('cameras', reducers),
  ],
  exports: [...components],
  declarations: [...components],
  providers: [],
})
export class CamerasModule { }
