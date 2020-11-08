import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { categoriesSelector } from '../state/reducers';
import { fetchCategories, categoryClicked } from '../state/actions';

@Component({
  selector: 'app-categories-smart',
  template: `
    <app-categories-dumb
      [categories]="categories$ | async"
      (categoryClicked)="onCategoryClicked($event)"
    >
    </app-categories-dumb>
  `,
})
export class CategoriesSmartComponent implements OnInit {
  categories$: Observable<string[]>;
  constructor(private store: Store) {}

  onCategoryClicked($event: { category: string }): void {
    this.store.dispatch(categoryClicked({ category: $event.category }));
  }
  ngOnInit(): void {
    this.categories$ = this.store.select(categoriesSelector);
    this.store.dispatch(fetchCategories());
  }
}
