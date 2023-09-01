import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../Response';
import { IUser } from '../User';
import { IUserRepo } from '../UserRepo';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/player35oficial`;

  constructor(private http: HttpClient) {}

  getUserProfile(): Observable<Response<IUser>> {
    return this.http.get<Response<IUser>>(this.apiUrl);
  }

  getUserRepos(): Observable<Response<IUserRepo[]>> {
    return this.http.get<Response<IUserRepo[]>>(`${this.apiUrl}/repos`);
  }
}
