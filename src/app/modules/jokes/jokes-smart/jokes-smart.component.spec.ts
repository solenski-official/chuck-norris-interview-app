import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesSmartComponent } from './jokes-smart.component';

describe('JokesSmartComponent', () => {
  let component: JokesSmartComponent;
  let fixture: ComponentFixture<JokesSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokesSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
