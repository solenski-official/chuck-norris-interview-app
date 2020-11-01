import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDumbComponent } from './categories-dumb.component';

describe('CategoriesDumbComponent', () => {
  let component: CategoriesDumbComponent;
  let fixture: ComponentFixture<CategoriesDumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesDumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesDumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
