import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import {AccordionModule, ButtonModule, InputTextModule, SidebarModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FinanceHomeComponent } from './finance-home/finance-home.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'create-user', component: CreateUserComponent },
  { path: 'finance-home',      component: FinanceHomeComponent},
  { path: '',
    redirectTo: '/finance-home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    FinanceHomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SidebarModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
