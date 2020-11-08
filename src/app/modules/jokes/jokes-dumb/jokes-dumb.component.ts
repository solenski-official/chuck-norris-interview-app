import { Component, OnInit, Input } from '@angular/core';
import { Joke } from 'src/libs/chuck-norris-api-client/models/joke';

@Component({
  selector: 'app-jokes-dumb',
  templateUrl: './jokes-dumb.component.html',
  styleUrls: ['./jokes-dumb.component.scss'],
})
export class JokesDumbComponent implements OnInit {
  @Input() joke: Joke;

  constructor() {}

  ngOnInit(): void {}
}
