import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesSmartComponent } from './categories-smart/categories-smart.component';
import { CategoriesDumbComponent } from './categories-dumb/categories-dumb.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './state/reducers';
@NgModule({
  declarations: [CategoriesSmartComponent, CategoriesDumbComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(CategoriesModule.FeatureName, reducers),
    CategoriesRoutingModule,
  ],
})
export class CategoriesModule {
  static readonly FeatureName = 'Categories';
}
