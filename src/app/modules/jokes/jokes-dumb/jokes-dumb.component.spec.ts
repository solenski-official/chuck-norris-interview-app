import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesDumbComponent } from './jokes-dumb.component';

describe('JokesDumbComponent', () => {
  let component: JokesDumbComponent;
  let fixture: ComponentFixture<JokesDumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesDumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
