import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, mergeMap, catchError, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  categoryClicked,
} from '../modules/categories/state/actions';
// TODO look through access modifies
@Injectable()
export class AppEffects {
  navigateToCategoryEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(categoryClicked),
        tap((action) => this.navigateToJoke(action.category))
      ),
    { dispatch: false }
  );

  // #region  service-like methods.
  // I like putting them as private in here so no one uses
  // services directly in their components
  private navigateToJoke(category: string): void {
    this.router.navigate(['jokes', category]);
  }
  // #endregion

  constructor(private actions$: Actions, private router: Router) {}
}
