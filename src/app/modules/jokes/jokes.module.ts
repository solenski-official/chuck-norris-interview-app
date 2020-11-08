import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokesRoutingModule } from './jokes-routing.module';
import { JokesDumbComponent } from './jokes-dumb/jokes-dumb.component';
import { JokesSmartComponent } from './jokes-smart/jokes-smart.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { jokeReducer } from './state/reducers';
import { JokeEffects } from './state/effects';
@NgModule({
  declarations: [JokesDumbComponent, JokesSmartComponent],
  imports: [
    EffectsModule.forFeature([JokeEffects]),
    StoreModule.forFeature('Joke', jokeReducer),
    CommonModule,
    JokesRoutingModule,
  ],
})
export class JokesModule {}
