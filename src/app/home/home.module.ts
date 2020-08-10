import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeesComponent } from './employees/employees.component';
import { AppRoutingModule } from '../app-routing.module'
import { NgZorroModule} from '../ng-zorro.module'


@NgModule({
  declarations: [HomeComponent, CustomersComponent, EmployeesComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgZorroModule
  ]
})
export class HomeModule { }
