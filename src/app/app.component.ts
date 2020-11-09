import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { goBack } from './state/actions';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isGoBackDisabled: Observable<boolean> = this.route.fragment.pipe(
    map((fragment) => fragment === 'categories')
  );
  constructor(private store: Store, private route: ActivatedRoute) {}

  goBackClicked(): void {
    this.store.dispatch(goBack());
  }
}
