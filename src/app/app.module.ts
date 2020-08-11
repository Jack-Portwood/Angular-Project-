import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomersComponent } from './home/customers/customers.component';
import { EmployeesComponent } from './home/employees/employees.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { uk_UA } from 'ng-zorro-antd/i18n';
import { registerLocaleData, CommonModule } from '@angular/common';
import uk from '@angular/common/locales/uk';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NgZorroModule } from './ng-zorro.module';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';


registerLocaleData(uk);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    CustomersComponent,
    EmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzTableModule,
    NgZorroModule,
    AmplifyUIAngularModule
    
  ],
  providers: [{ provide: NZ_I18N, useValue: uk_UA }, { provide: NZ_ICONS, useValue: icons }  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
