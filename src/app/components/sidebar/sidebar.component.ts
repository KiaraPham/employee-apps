import {Component, Input} from '@angular/core';
import {
  faTachometerAlt, faChevronLeft, faCalendar, faEdit, faTv, faChartPie, faTh, faCopy,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent {
  @Input() icon: string;
  @Input() title: string;
  sidebarItems = [
    {
      title: 'Dashboard',
      icon: faTachometerAlt
    },
    {
      title: 'Projects',
      icon: faCopy
    },

    {
      title: 'Resume Template',
      icon: faTh
    },

    {
      title: 'Chat Room',
      icon: faChartPie
    },

    {
      title: 'Events',
      icon: faTv
    },

    {
      title: 'Food and Drink',
      icon: faEdit
    },

    {
      title: 'Calendar',
      icon: faCalendar
    }
  ];
  faSearch = faSearch;
  faChevronLeft = faChevronLeft;

  constructor() {
  }
}

