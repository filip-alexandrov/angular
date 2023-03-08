import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { RouteGuard1Component } from './components/route-guard1/route-guard1.component';
import { RouteGuard2Component } from './components/route-guard2/route-guard2.component';
import { RouteGuard3Component } from './components/route-guard3/route-guard3.component';
import { RouteGuardChildComponent } from './components/route-guard-child/route-guard-child.component';
import { RouteGuardChild2Component } from './components/route-guard-child2/route-guard-child2.component';
import { OffersModule } from './modules/offers/offers.module';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CustomDirectivesComponent,
    RouteGuard1Component,
    RouteGuard2Component,
    RouteGuard3Component,
    RouteGuardChildComponent,
    RouteGuardChild2Component,
  ],
  imports: [BrowserModule, AppRoutingModule, OffersModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
