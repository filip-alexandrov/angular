import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuard3Component } from './route-guard3.component';

describe('RouteGuard3Component', () => {
  let component: RouteGuard3Component;
  let fixture: ComponentFixture<RouteGuard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteGuard3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteGuard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
