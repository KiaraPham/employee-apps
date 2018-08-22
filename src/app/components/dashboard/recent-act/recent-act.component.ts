import {Component} from '@angular/core';

@Component({
  selector: 'recent-act',
  templateUrl: './recent-act.component.html',
  styleUrls: ['./recent-act.component.scss']
})


export class RecentActComponent {
  recentActs = [
    {
      ago: 4,
      action: 'You created lists',
    },
    {
      ago: 5,
      action: 'You changed status',
    },
    {
      ago: 55,
      action: 'You updated profile',
    },
    {
      ago: 20,
      action: 'You followed Anna',
    },

  ]
  constructor() {

  }
}

