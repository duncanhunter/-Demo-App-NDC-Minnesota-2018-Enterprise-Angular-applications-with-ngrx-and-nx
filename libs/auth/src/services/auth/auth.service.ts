import { Injectable } from '@angular/core';
import { Authenticate, User } from '@demo-app/data-models';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(authenticate: Authenticate): Observable<User> {
    return this.httpClient.post<User>(
      'http://localhost:3000/login',
      authenticate
    );
  }
}
