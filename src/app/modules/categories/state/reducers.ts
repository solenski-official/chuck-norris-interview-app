import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
} from '@ngrx/store';
import { CategoriesActions, categoriesFetched } from './actions';

export interface CategoriesState {
  categories: any;
}

const initialState: CategoriesState = {
  categories: null,
};
const featureSelector = createFeatureSelector('Categories');
export const categoriesSelector = createSelector(
  featureSelector,
  (state: CategoriesState) => state.categories
);

export const categoryReducer = createReducer(
  initialState,
  on(categoriesFetched, (state, action) => ({
    ...state,
    categories: action.categories,
  }))
);
