import {Component} from '@angular/core';

@Component({
  selector: 'customer-feed',
  templateUrl: './customer-feed.component.html',
  styleUrls: ['./customer-feed.component.scss']
})


export class CustomerFeedComponent {
  customerLists = [
    {
      name: 'Jenny',
      ago: 4,
      status: 'Awesome Food',
      image: '../../../../assets/images/user.png'
    },
    {
      name: 'Anna',
      ago: 12,
      status: 'Great Mood',
      image: '../../../../assets/images/user.png'
    },
    {
      name: 'Josh',
      ago: 7,
      status: 'Go ahead',
      image: '../../../../assets/images/user.png'
    },
    {
      name: 'Lisa',
      ago: 4,
      status: 'Nice Support',
      image: '../../../../assets/images/user.png'
    },
    {
      name: 'Alicia',
      ago: 30,
      status: 'Awesome Food',
      image: '../../../../assets/images/user.png'
    },
  ]
  constructor() {

  }
}

