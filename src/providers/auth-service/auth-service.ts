import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {
  private user: any;
  private userChange: Subject<any> = new Subject();

  private API_URL = 'http://localhost:3000/auth';

  userChange$: Observable<any> = this.userChange.asObservable();

  constructor(public httpClient: HttpClient) {}
  
  private setUser(user?: any) {
    this.user = user;
    this.userChange.next(user);
    return user;
  }

  me(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient
      .get(`${this.API_URL}/me`, options)
      .toPromise()
      .then(user => this.setUser(user))
      .catch(err => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }

  login(user: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient
      .post(`${this.API_URL}/login`, user, options)
      .toPromise()
      .then(data => this.setUser(data));
  }

  signup(user: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    console.log(user);
    return this.httpClient
      .post(`${this.API_URL}/signup`, user, options)
      .toPromise()
      .then(data => {
        this.setUser(data);
      });
  }

  logout(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient
      .post(`${this.API_URL}/logout`, {}, options)
      .toPromise()
      .then(() => this.setUser());
  }

  getUser(): any {
    return this.user;
  }

}
