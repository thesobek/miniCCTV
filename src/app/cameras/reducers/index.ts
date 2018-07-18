import * as fromCameras from './cameras.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface IEventsState {
  cameras: fromCameras.IState;
}

export const reducers: ActionReducerMap<IEventsState> = {
  cameras: fromCameras.reducer
};

export const getEventsState = createFeatureSelector<IEventsState>('cameras');

export const getEventEntitiesState = createSelector(
  getEventsState,
  state => state.cameras
);
