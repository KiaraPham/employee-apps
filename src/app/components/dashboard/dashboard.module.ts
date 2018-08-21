

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardComponent } from './dashboard.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {FoodMenuComponent} from './food-menu/food-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    DashboardCardComponent,
    SidebarComponent,
    FoodMenuComponent

  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [  ]
})
export class DashboardModule {}
