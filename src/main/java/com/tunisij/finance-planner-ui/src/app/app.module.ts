import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {
  AccordionModule,
  ButtonModule,
  CalendarModule,
  ChartModule,
  InputTextModule,
  SidebarModule,
  StepsModule,
  TabViewModule
} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FinanceHomeComponent } from './finance-home/finance-home.component';
import {RouterModule, Routes} from '@angular/router';
import { InputDataFlowComponent } from './input-data-flow/input-data-flow.component';
import { InputSalaryComponent } from './input-data-flow/input-salary/input-salary.component';
import { AccountInputComponent } from './input-data-flow/account-input/account-input.component';
import { AssetInputComponent } from './input-data-flow/asset-input/asset-input.component';
import { SalaryBreakdownComponent } from './finance-home/salary-breakdown/salary-breakdown.component';
import { NetWorthBreakdownComponent } from './finance-home/net-worth-breakdown/net-worth-breakdown.component';
import {TableModule} from 'primeng/table';
import { BudgetInputComponent } from './input-data-flow/budget-input/budget-input.component';
import { BudgetBreakdownComponent } from './finance-home/budget-breakdown/budget-breakdown.component';

const appRoutes: Routes = [
  {
    path: 'input-data', component: InputDataFlowComponent,
    children: [
      {path: 'input-data', redirectTo: 'salary-input'},
      { path: 'salary-input', component: InputSalaryComponent },
      { path: 'account-input', component: AccountInputComponent },
      { path: 'asset-input', component: AssetInputComponent },
      { path: 'budget-input', component: BudgetInputComponent },
    ]
  },
  { path: 'finance-home', component: FinanceHomeComponent },
  { path: 'app-net-worth-breakdown', component: NetWorthBreakdownComponent },
  { path: 'app-salary-breakdown', component: SalaryBreakdownComponent },
  { path: 'app-budget-breakdown', component: BudgetBreakdownComponent },
  { path: '',
    redirectTo: '/finance-home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    FinanceHomeComponent,
    InputDataFlowComponent,
    InputSalaryComponent,
    AccountInputComponent,
    AssetInputComponent,
    SalaryBreakdownComponent,
    NetWorthBreakdownComponent,
    BudgetInputComponent,
    BudgetBreakdownComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SidebarModule,
    InputTextModule,
    StepsModule,
    TableModule,
    ButtonModule,
    ChartModule,
    TabViewModule,
    CalendarModule,
    HttpClientModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
