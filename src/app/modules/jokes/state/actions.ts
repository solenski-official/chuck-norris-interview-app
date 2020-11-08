import { createAction, props } from '@ngrx/store';
export const FeatureName = 'Joke';
const JokeActionsNames = {
  fetchJoke: `[${FeatureName}] Fetch Joke`,
  jokeFetched: `[${FeatureName}] Joke Fetched`,
};

export const fetchJoke = createAction(
  JokeActionsNames.fetchJoke,
  props<{ category: string }>()
);

export const jokeFetched = createAction(JokeActionsNames.jokeFetched, props<{joke: any}>() );
