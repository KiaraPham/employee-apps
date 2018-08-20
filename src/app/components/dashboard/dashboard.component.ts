import {Component} from '@angular/core';
import {
  faEnvelope, faLock, faTachometerAlt, faChevronLeft, faCalendar, faEdit, faTv, faChartPie, faTh, faCopy,
  faShoppingCart, faUsers, faSearch, faCog, faCogs, faFlag, faBell,
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
      content: 3,
      icon: faCog,
      bg: 'bg-project'
    },
    {
      title: 'LEAVES 2018',
      content: 12,
      icon: faGooglePlusG,
      bg: 'bg-leave'
    },
    {
      title: 'SENIORITY',
      content: 5,
      icon: faShoppingCart,
      bg: 'bg-seniority'
    },
    {
      title: 'POINTS',
      content: 2000,
      icon: faUsers,
      bg: 'bg-point'
    }
  ];
  faEnvelope = faEnvelope;
  faBell = faBell;
  faFlag = faFlag;
  faCogs = faCogs;
  faSearch = faSearch;
  faCopy = faCopy;
  faTh = faTh;
  faChartPie = faChartPie;
  faTv = faTv;
  faEdit = faEdit;
  faCalendar = faCalendar;
  faChevronLeft = faChevronLeft;
  faTachometerAlt = faTachometerAlt;
}

