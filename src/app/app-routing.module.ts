import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './home/customers/customers.component';
import { EmployeesComponent } from './home/employees/employees.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component'
const routes: Routes = [
  
  { path: 'login', component: AuthComponent },

  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'customers',
        component: CustomersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'employees',
        component: EmployeesComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }