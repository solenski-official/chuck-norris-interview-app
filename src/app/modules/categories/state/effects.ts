import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap, shareReplay } from 'rxjs/operators';
import { categoriesFetched, fetchCategories } from './actions';
import { JokeControllerService } from '../../../../libs/chuck-norris-api-client/services/joke-controller.service';
@Injectable()
export class CategoriesEffects {
  fetchCategoriesEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCategories),
      switchMap(() =>
        this.fetchCategories().pipe(
          map((categories) => categoriesFetched({ categories }))
        )
      )
    )
  );
  cachedGetCategory: Observable<string>;

  // #region  service-like methods.
  // I like putting them as private in here so no one uses
  // services directly in their components
  private fetchCategories(): Observable<string[]> {
    // The API's swagger configuration is badly written.
    // Returns JSON as string...
    return this.cachedGetCategory.pipe(
      map((result) => JSON.parse(result))
    ) as Observable<string[]>;
  }
  // #endregion

  constructor(
    private actions$: Actions,
    private jokeService: JokeControllerService
  ) {
    this.cachedGetCategory = this.jokeService
      .getCategoryValuesUsingGET()
      .pipe(shareReplay(1));
  }
}
