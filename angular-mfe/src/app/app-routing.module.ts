import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AuthGuard } from './auth.guard';
import { CompaniesComponent } from './companies/companies.component';

const routes: Routes = [
  {
    path: 'list',
    component: CompaniesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: '/external-companies' }],
  exports: [RouterModule],
})
export class AppRoutingModule {}
