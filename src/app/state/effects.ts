import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { goBack } from '../state/actions';
import { categoryClicked } from '../modules/categories/state/actions';
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
  naviageBackEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(goBack),
        tap(() => this.navigateToCategories())
      ),
    { dispatch: false }
  );

  // #region  service-like methods.
  // I like putting them as private in here so no one uses
  // services directly in their components
  private navigateToJoke(category: string): void {
    this.router.navigate(['jokes', category]);
  }
  private navigateToCategories(): void {
    this.router.navigate(['categories']);
  }
  // #endregion

  constructor(private actions$: Actions, private router: Router) {}
}
