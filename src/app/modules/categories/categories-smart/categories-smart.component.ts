import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { categoriesSelector } from '../state/reducers';

@Component({
  selector: 'app-categories-smart',
  templateUrl: './categories-smart.component.html',
  styleUrls: ['./categories-smart.component.scss'],
})
export class CategoriesSmartComponent implements OnInit {
  categories$: Observable<any>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.categories$ = this.store.select(categoriesSelector);
  }
}
