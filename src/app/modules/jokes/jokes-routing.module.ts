import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokesSmartComponent } from './jokes-smart/jokes-smart.component';

const routes: Routes = [
  {
    path: '',
    component: JokesSmartComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokesRoutingModule { }
