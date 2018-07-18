import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action } from '@ngrx/store';

// Replace 'any' type with your model
export interface IState extends EntityState<any> {
  // define your state here
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>({
  selectId: (camera: any) => camera.id,
  sortComparer: null
});


export const initialState: IState = adapter.getInitialState({

});

export function reducer(
  state = initialState,
  action: Action
): IState {
  switch (action.type) {
    default: return state;
  }
}
