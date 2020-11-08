import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { fetchJoke } from '../state/actions';
import { jokeSelector } from '../state/reducers';
import { Joke } from 'src/libs/chuck-norris-api-client/models/joke';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-jokes-smart',
  template: `
    <app-jokes-dumb
      [joke] = "joke | async"
    ></app-jokes-dumb>
  `
})
export class JokesSmartComponent implements OnInit {
  joke: Observable<Joke>;
  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((param) =>
      this.store.dispatch(
        fetchJoke({
          category: param.category,
        })
      )
    );
    this.joke = this.store.select(jokeSelector);
  }
}
