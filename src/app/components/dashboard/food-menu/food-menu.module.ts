
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {DashboardComponent} from '../dashboard.component';
import {FoodMenuComponent} from './food-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    DashboardComponent
  ],
  declarations: [
    FoodMenuComponent
  ],
  providers: [  ]
})
export class FoodMenuModule {}
