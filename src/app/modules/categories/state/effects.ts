import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { CategoriesActions } from './actions';

@Injectable()
export class CategoriesEffects {
  // #region  service-like methods. I like putting them as private in here so no one uses
  // services directly in their components
  private fetchCategories() {
    enviroment
  }
  // #endregion


  fetchCategoriesEffect = createEffect(() =>
  this.actions$.pipe(ofType(CategoriesActions.fetchCategories), switchMap( x=>

  )

  )))


  constructor(private actions$: Actions) {}
}
