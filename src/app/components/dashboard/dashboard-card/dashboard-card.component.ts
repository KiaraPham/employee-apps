import {Component, Input} from '@angular/core';

@Component({
  selector: 'dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss']
})


export class DashboardCardComponent {
  @Input() title: string;
  @Input() content: string;
  @Input() icon: string;
  @Input() bg: string;
  constructor() {
  }
}

