import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { goBack } from './state/actions';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isGoBackDisabled: Observable<boolean> = this.route.fragment.pipe(tap(x=> console.log(x)),
    map((fragment) => fragment === 'categories')
  );
  constructor(private store: Store, private route: ActivatedRoute) {}

  goBackClicked(): void {
    this.store.dispatch(goBack());
  }
}
