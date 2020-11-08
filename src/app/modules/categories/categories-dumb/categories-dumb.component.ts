import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories-dumb',
  templateUrl: './categories-dumb.component.html',
  styleUrls: ['./categories-dumb.component.scss'],
})
export class CategoriesDumbComponent implements OnInit {
  @Input() categories: string[];
  @Output() categoryClicked = new EventEmitter<{ category: string }>();
  constructor() {}

  ngOnInit(): void {}
}
