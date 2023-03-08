import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditAboutComponent } from './components/edit-about/edit-about.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

import { AuthGuard } from './services/auth.guard';
import { ModuleGuard } from './services/module.guard';
import { NotCompleteGuard } from './services/not-complete.guard';
import { ResolveGuard } from './services/resolve.guard';
import { RoleGuard } from './services/role.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    canActivateChild: [RoleGuard],
    children: [{ path: 'edit', component: EditAboutComponent }],
  },
  { path: 'contacts', component: ContactComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  {
    path: 'lazy',
    canLoad: [ModuleGuard],
    loadChildren: () =>
      import('./modules/lazy.module').then((m) => m.LazyModule),
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
    canDeactivate: [NotCompleteGuard],
  },
  {
    path: 'products',
    component: ProductsComponent,
    resolve: { data: ResolveGuard },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
