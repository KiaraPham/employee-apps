import { Component } from '@angular/core';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  faEnvelope = faEnvelope;
  faLock = faLock;
  faGooglePlusG = faGooglePlusG;
  constructor() {
    console.log('??');
  }
}
