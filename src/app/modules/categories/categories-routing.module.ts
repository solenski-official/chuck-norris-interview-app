import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesSmartComponent } from './categories-smart/categories-smart.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesSmartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule {}
