import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphPlaygroundComponent } from './graph-playground.component';

describe('GraphPlaygroundComponent', () => {
  let component: GraphPlaygroundComponent;
  let fixture: ComponentFixture<GraphPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
