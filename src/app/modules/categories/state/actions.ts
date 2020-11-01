import { createAction, props } from '@ngrx/store';
import { CategoriesModule } from '../categories.module';
export const FeatureName = "Categories"
export const CategoriesActions = {
  fetchCategories: `[${FeatureName}] Fetch Categories`,
  categoriesFetched: `[${FeatureName}] Categories Fetched`,
};

export const fetchCategories = createAction(CategoriesActions.fetchCategories);
export const categoriesFetched = createAction(
  CategoriesActions.categoriesFetched,
  props<{ categories: string[] }>()
);
