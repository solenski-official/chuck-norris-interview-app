import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesRoutingModule } from './jokes-routing.module';
import { JokesDumbComponent } from './jokes-dumb/jokes-dumb.component';
import { JokesSmartComponent } from './jokes-smart/jokes-smart.component';


@NgModule({
  declarations: [JokesDumbComponent, JokesSmartComponent],
  imports: [
    CommonModule,
    JokesRoutingModule
  ]
})
export class JokesModule { }
