import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuard2Component } from './route-guard2.component';

describe('RouteGuard2Component', () => {
  let component: RouteGuard2Component;
  let fixture: ComponentFixture<RouteGuard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteGuard2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteGuard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
