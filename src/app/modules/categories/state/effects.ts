import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { CategoriesActions, categoriesFetched } from './actions';
import { environment } from '../../../../environments/environment';
import { JokeControllerService } from '../../../../libs/chuck-norris-api-client/services/joke-controller.service';
@Injectable()
export class CategoriesEffects {
  fetchCategoriesEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(CategoriesActions.fetchCategories),
      switchMap(() =>
        this.fetchCategories().pipe(
          map((categories) => categoriesFetched({ categories }))
        )
      )
    )
  );

  // #region  service-like methods.
  // I like putting them as private in here so no one uses
  // services directly in their components
  private fetchCategories(): Observable<string[]> {
    // The API's swagger configuration is badly written.
    // Returns JSON as string...
    return this.jokeService
      .getCategoryValuesUsingGET()
      .pipe(map((result) => JSON.parse(result))) as Observable<string[]>;
  }
  // #endregion

  constructor(
    private actions$: Actions,
    private jokeService: JokeControllerService
  ) {}
}
