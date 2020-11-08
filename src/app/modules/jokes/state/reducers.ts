import {
  createFeatureSelector,
  createSelector,
  createReducer,
  on,
} from '@ngrx/store';
import { jokeFetched } from './actions';
import { Joke } from '../../../../libs/chuck-norris-api-client/models/joke';

export interface JokeState {
  joke: Joke;
}

const initialState: JokeState = {
  joke: null,
};
const featureSelector = createFeatureSelector('Joke');

export const jokeSelector = createSelector(
  featureSelector,
  (state: JokeState) => state.joke
);
export const jokeReducer = createReducer(
  initialState,
  on(jokeFetched, (state, action) => ({
    ...state,
    joke: action.joke,
  }))
);
