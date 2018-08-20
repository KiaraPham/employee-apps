

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardComponent } from './dashboard.component';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    DashboardCardComponent
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [  ]
})
export class DashboardModule {}
