import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyChildComponent } from './lazy-child/lazy-child.component';
import { LazyParentComponent } from './lazy-parent/lazy-parent.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: LazyParentComponent }];

@NgModule({
  declarations: [LazyChildComponent, LazyParentComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyModule {}
