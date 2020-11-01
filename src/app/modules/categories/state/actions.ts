import { createAction, props } from '@ngrx/store';
import { CategoriesModule } from '../categories.module';

export const CategoriesActions = {
  fetchCategories: `[${CategoriesModule.FeatureName}] Fetch Categories`,
  categoriesFetched: `[${CategoriesModule.FeatureName}] Categories Fetched`,
};

export const fetchCategories = createAction(CategoriesActions.fetchCategories);
export const categoriesFetched = createAction(
  CategoriesActions.categoriesFetched
);
