import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {Router, RouterModule, Routes} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ForgotpwComponent} from './components/login/forgotpw/forgotpw.component';
import {TestComponent} from './test/test.component';
import { DashboardCardComponent } from './components/dashboard/dashboard/dashboard-card/dashboard-card.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login/forgotpw', component: ForgotpwComponent},
  {path: 'test', component: TestComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ForgotpwComponent,
    TestComponent,
    DashboardCardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', router.config);
  }
}
