import { createAction, props } from '@ngrx/store';
import { CategoriesModule } from '../categories.module';
export const FeatureName = 'Categories';
const CategoriesActionsNames = {
  fetchCategories: `[${FeatureName}] Fetch Categories`,
  categoriesFetched: `[${FeatureName}] Categories Fetched`,
  categoryClicked: `[${FeatureName}] Navigate To Category`,
};

export const categoryClicked = createAction(
  CategoriesActionsNames.categoryClicked,
  props<{ category: string }>()
);
export const fetchCategories = createAction(CategoriesActionsNames.fetchCategories);
export const categoriesFetched = createAction(
  CategoriesActionsNames.categoriesFetched,
  props<{ categories: string[] }>()
);
