import { Component } from '@angular/core';
import { faFolder, faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.css'],
})
export class UserPortfolioComponent {
  faFolder = faFolder;
  faStar = faStar;
  faCodeFork = faCodeFork;
}
