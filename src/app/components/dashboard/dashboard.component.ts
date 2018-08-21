import {Component} from '@angular/core';
import {
  faShoppingCart, faUsers, faCog,
} from '@fortawesome/free-solid-svg-icons';
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {

  cards = [
    {
      title: 'PROJECTS',
      content: 10,
      icon: faCog,
      bg: 'bg-project'
    },
    {
      title: 'LEAVES 2018',
      content: 8,
      icon: faGooglePlusG,
      bg: 'bg-leave'
    },
    {
      title: 'SENIORITY 2018',
      content: 16,
      icon: faShoppingCart,
      bg: 'bg-seniority'
    },
    {
      title: 'POINTS',
      content: 1999,
      icon: faUsers,
      bg: 'bg-point'
    }
  ];
}

