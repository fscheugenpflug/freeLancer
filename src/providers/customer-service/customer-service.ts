import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CustomerServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomerServiceProvider {
  user: Array<any>;

  private baseUrl = "http://localhost:3000/customer";

  constructor(public httpClient: HttpClient) {  }

  listAllwithinCategory(profession: String): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/${profession}`, options)
      .toPromise();
  }

  getDetails(id: String): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/${id}`, options)
      .toPromise();
  }
}

