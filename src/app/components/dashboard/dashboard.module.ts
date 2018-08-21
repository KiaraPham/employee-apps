

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardComponent } from './dashboard.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {FoodMenuComponent} from './food-menu/food-menu.component';
import {CustomerFeedComponent} from './customer-feed/customer-feed.component';
import {RecentActComponent} from './recent-act/recent-act.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    DashboardCardComponent,
    SidebarComponent,
    FoodMenuComponent,
    CustomerFeedComponent,
    RecentActComponent
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [  ]
})
export class DashboardModule {}
