import {Component} from '@angular/core';
import {
  faEnvelope, faLock, faTachometerAlt, faChevronLeft, faCalendar, faEdit, faTv, faChartPie, faTh, faCopy,
  faShoppingCart, faUsers, faSearch, faCog, faCogs, faFlag, faBell, faCaretDown
} from '@fortawesome/free-solid-svg-icons';
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;
  faCaretDown = faCaretDown;
  faBell = faBell;
  faFlag = faFlag;
  faCogs = faCogs;
  faCog = faCog;
  faSearch = faSearch;
  faUsers = faUsers;
  faShoppingCart = faShoppingCart;
  faCopy = faCopy;
  faTh = faTh;
  faChartPie = faChartPie;
  faTv = faTv;
  faEdit = faEdit;
  faCalendar = faCalendar;
  faChevronLeft = faChevronLeft;
  faGooglePlusG = faGooglePlusG;
  faTachometerAlt = faTachometerAlt;
}

