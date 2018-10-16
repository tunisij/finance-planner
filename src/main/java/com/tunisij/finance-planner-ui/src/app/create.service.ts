import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './objects/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  usersApi = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.usersApi);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersApi, user);
  }
}
