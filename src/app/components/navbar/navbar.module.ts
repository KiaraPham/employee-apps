
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardComponent } from '../dashboard/dashboard.component';
import {NavbarComponent} from './navbar.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    DashboardComponent,
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [  ]
})
export class NavbarModule {}
