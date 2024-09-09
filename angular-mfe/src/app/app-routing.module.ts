import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesRegisterComponent } from './companies-register/companies-register.component';
import { CompaniesEditComponent } from './companies-edit/companies-edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: CompaniesComponent,
  },
  {
    path: 'register',
    component: CompaniesRegisterComponent,
  },
  {
    path: 'edit/:id',
    component: CompaniesEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: '/external-companies' }],
  exports: [RouterModule],
})
export class AppRoutingModule {}
