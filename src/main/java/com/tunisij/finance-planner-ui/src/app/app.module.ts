import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import {AccordionModule, ButtonModule, InputTextModule, SidebarModule, StepsModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FinanceHomeComponent } from './finance-home/finance-home.component';
import {RouterModule, Routes} from '@angular/router';
import { InputDataFlowComponent } from './input-data-flow/input-data-flow.component';
import { InputSalaryComponent } from './input-data-flow/input-salary/input-salary.component';
import { AccountInputComponent } from './input-data-flow/account-input/account-input.component';
import { AssetInputComponent } from './input-data-flow/asset-input/asset-input.component';

const appRoutes: Routes = [
  { path: 'create-user', component: CreateUserComponent },
  {
    path: 'input-data', component: InputDataFlowComponent,
    children: [
      { path: 'salary-input', component: InputSalaryComponent },
      { path: 'account-input', component: AccountInputComponent },
      { path: 'asset-input', component: AssetInputComponent },
    ]
  },
  { path: 'finance-home', component: FinanceHomeComponent },
  { path: '',
    redirectTo: '/finance-home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    FinanceHomeComponent,
    InputDataFlowComponent,
    InputSalaryComponent,
    AccountInputComponent,
    AssetInputComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SidebarModule,
    InputTextModule,
    StepsModule,
    ButtonModule,
    HttpClientModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
