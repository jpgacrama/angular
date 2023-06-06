import { createSelector, createFeatureSelector, select } from '@ngrx/store';
import { IUser } from '../core/interfaces/user.interface';
import { AppState } from './app.reducer';
import { RouterReducerState } from '@ngrx/router-store';
import { createEntityAdapter, getSelectors } from '@ngrx/entity';

const userAdapter = createEntityAdapter<IUser>();

export const selectApp = createFeatureSelector<AppState>('app');

export const selectUsers = createSelector(
  selectApp,
  (state: AppState) => state.users
);

export const selectRouter = createFeatureSelector<
  AppState,
  RouterReducerState<any>
>('router');

const { selectRouteParam } = getSelectors(selectRouter);
export const selectUserUUID = selectRouteParam('uuid');

// Updated selectors using @ngrx/entity
const { selectEntities: selectUserEntities, selectAll: selectAllUsers } =
  userAdapter.getSelectors();

export const selectCurrentUser = createSelector(
  selectUserUUID,
  selectUserEntities,
  (uuid, userEntities) => (userEntities ? userEntities[uuid] : null)
);

export const selectSimilarUsers = createSelector(
  selectUserUUID,
  selectAllUsers,
  (uuid, users) =>
    users ? users.filter((user) => user.login.uuid !== uuid) : null
);
