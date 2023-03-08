import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuardChild2Component } from './route-guard-child2.component';

describe('RouteGuardChild2Component', () => {
  let component: RouteGuardChild2Component;
  let fixture: ComponentFixture<RouteGuardChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteGuardChild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteGuardChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
