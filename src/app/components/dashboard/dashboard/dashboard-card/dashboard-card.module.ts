
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardCardComponent } from './dashboard-card.component';
import {DashboardComponent} from '../../dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    DashboardComponent
  ],
  declarations: [
    DashboardCardComponent
  ],
  providers: [  ]
})
export class DashboardCardModule {}
