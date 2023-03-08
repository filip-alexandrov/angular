import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuardChildComponent } from './route-guard-child.component';

describe('RouteGuardChildComponent', () => {
  let component: RouteGuardChildComponent;
  let fixture: ComponentFixture<RouteGuardChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteGuardChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteGuardChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
