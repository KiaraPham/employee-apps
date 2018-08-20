import {Component} from '@angular/core';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons';
import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})

export class TestComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;
  faGooglePlusG = faGooglePlusG;

  constructor() {
    console.log('??');
  }
}
