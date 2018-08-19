import { Component } from '@angular/core';
import { faEnvelope, faLock, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

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

