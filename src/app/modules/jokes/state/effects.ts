import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { JokeControllerService } from '../../../../libs/chuck-norris-api-client/services/joke-controller.service';
import { fetchJoke, jokeFetched } from './actions';
import { Joke } from '../../../../libs/chuck-norris-api-client/models/joke';
@Injectable()
export class JokeEffects {
  fetchJokeEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchJoke),
      switchMap((fetchJokeAction) =>
        this.fetchJoke(fetchJokeAction.category).pipe(
          map((joke) =>
            jokeFetched({
              joke: joke,
            })
          )
        )
      )
    )
  );


  // #region  service-like methods.
  // I like putting them as private in here so no one uses
  // services directly in their components
  private fetchJoke(category: string): Observable<Joke> {
    // The API's swagger configuration is badly written.
    // Returns JSON as string...
    return this.jokeService.getRandomJokeUsingGET({
      category,
    });
  }
  // #endregion

  constructor(
    private actions$: Actions,
    private jokeService: JokeControllerService
  ) {}
}
