import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { RouteGuard1Component } from './components/route-guard1/route-guard1.component';
import { RouteGuard2Component } from './components/route-guard2/route-guard2.component';
import { RouteGuard3Component } from './components/route-guard3/route-guard3.component';
import { AuthGuard } from './guards/auth.guard';
import { RouteGuardChildComponent } from './components/route-guard-child/route-guard-child.component';
import { RoleGuard } from './guards/role.guard';
import { NotCompleteGuard } from './guards/not-complete.guard';

const routes: Routes = [
  { path: 'custom-directives', component: CustomDirectivesComponent },
  { path: 'admin', component: RouteGuard1Component, canActivate: [AuthGuard] },
  { path: 'access-denied', component: RouteGuard2Component },
  {
    path: 'user',
    component: RouteGuard3Component,
    canActivateChild: [RoleGuard],
    children: [
      {
        path: 'child',
        component: RouteGuardChildComponent,
        canDeactivate: [NotCompleteGuard],
        children: [
          {
            path: 'offers',
            loadChildren: () =>
              import('./modules/offers/offers.module').then(
                (m) => m.OffersModule
              ),
          },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
