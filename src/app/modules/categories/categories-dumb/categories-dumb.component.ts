import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-dumb',
  templateUrl: './categories-dumb.component.html',
  styleUrls: ['./categories-dumb.component.scss'],
})
export class CategoriesDumbComponent implements OnInit {
  @Input() categories: string[];

  constructor() {}

  ngOnInit(): void {}
}
