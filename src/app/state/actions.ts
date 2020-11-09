import { createAction, props } from '@ngrx/store';
export const FeatureName = 'Main';
const MainActionNames = {
  goBack: `[${FeatureName}] Go Back`,
};

export const goBack = createAction(MainActionNames.goBack);
