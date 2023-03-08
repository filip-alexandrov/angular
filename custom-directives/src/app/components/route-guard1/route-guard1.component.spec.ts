import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuard1Component } from './route-guard1.component';

describe('RouteGuard1Component', () => {
  let component: RouteGuard1Component;
  let fixture: ComponentFixture<RouteGuard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteGuard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteGuard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
