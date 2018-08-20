
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SidebarComponent } from './sidebar.component';
import {DashboardComponent} from '../dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    DashboardComponent
  ],
  declarations: [
    SidebarComponent
  ],
  providers: [  ]
})
export class SidebarModule {}
