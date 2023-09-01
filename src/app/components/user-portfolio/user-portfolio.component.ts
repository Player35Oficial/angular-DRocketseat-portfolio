import { Component } from '@angular/core';
import { faFolder, faCodeFork } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { IUserRepo } from 'src/app/UserRepo';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.css'],
})
export class UserPortfolioComponent {
  faFolder = faFolder;
  faStar = faStar;
  faCodeFork = faCodeFork;

  repos!: any;

  constructor(private githubService: GithubService) {}
  ngOnInit(): void {
    this.githubService.getUserRepos().subscribe((repos) => {
      const data = repos;

      this.repos = data;
      console.log(repos);
    });
  }
}
