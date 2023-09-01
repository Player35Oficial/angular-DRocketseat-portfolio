import { Component } from '@angular/core';
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faGlobe,
  faEnvelope,
  faBriefcase,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-cards',
  templateUrl: './user-cards.component.html',
  styleUrls: ['./user-cards.component.css'],
})
export class UserCardsComponent {
  faLinkedin = faLinkedinIn;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faGlobe = faGlobe;
  faEnvelope = faEnvelope;
  faBriefcase = faBriefcase;
  faLocationDot = faLocationDot;
}
