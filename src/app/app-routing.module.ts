import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'jokes/:category',
    loadChildren: () =>
      import('./modules/jokes/jokes.module').then((module) => module.JokesModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/categories/categories.module').then(
        (module) => module.CategoriesModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'categories',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
