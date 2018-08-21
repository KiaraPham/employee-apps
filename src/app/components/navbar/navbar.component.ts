import {Component, Input} from '@angular/core';
import {
  faEnvelope, faCogs, faSearch, faGlobeAsia, faShoppingCart, faBell, faChevronDown
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  @Input() icon: string;
  @Input() amount: string;
  @Input() bg: string;

  navItems = [
    {
      icon: faShoppingCart,
      amount: 2,
      bg: 'bg-mail-notification'
    },
    {
      icon: faEnvelope,
      amount: 3,
      bg: 'bg-bell-notification'
    },
    {
      icon: faBell,
      amount: 4,
      bg: 'bg-flag-notification'
    },
  ]
  faCogs = faCogs;
  faSearch = faSearch;
  faGlobeAsia = faGlobeAsia;
  faChevronDown = faChevronDown
  constructor() {
  }
}

