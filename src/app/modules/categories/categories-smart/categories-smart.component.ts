import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { categoriesSelector } from '../state/reducers';
import { fetchCategories } from '../state/actions';

@Component({
  selector: 'app-categories-smart',
  templateUrl: './categories-smart.component.html',
  styleUrls: ['./categories-smart.component.scss'],
})
export class CategoriesSmartComponent implements OnInit {
  categories$: Observable<string[]>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(categoriesSelector);
    this.store.dispatch(fetchCategories());
  }
}
