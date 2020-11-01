import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'jokes',
    loadChildren: () =>
      import('./modules/jokes/jokes.module').then((x) => x.JokesModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/categories/categories.module').then(
        (x) => x.CategoriesModule
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
