import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesSmartComponent } from './categories-smart/categories-smart.component';
import { CategoriesDumbComponent } from './categories-dumb/categories-dumb.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CategoriesEffects } from './state/effects';
import { categoryReducer } from './state/reducers';
import { ApiModule } from '../../../libs/chuck-norris-api-client/api.module';
@NgModule({
  declarations: [CategoriesSmartComponent, CategoriesDumbComponent],
  imports: [
    CommonModule,
    ApiModule,
    StoreModule.forFeature('Categories', categoryReducer),
    EffectsModule.forFeature([CategoriesEffects]),
    CategoriesRoutingModule,
  ],
})
export class CategoriesModule {}
