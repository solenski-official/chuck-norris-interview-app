import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesSmartComponent } from './categories-smart/categories-smart.component';
import { CategoriesDumbComponent } from './categories-dumb/categories-dumb.component';


@NgModule({
  declarations: [CategoriesSmartComponent, CategoriesDumbComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
