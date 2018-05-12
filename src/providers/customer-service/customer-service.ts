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

  private baseUrl = "http://localhost:3000";

  constructor(public httpClient: HttpClient) {
    this.user = [
      {
        profession: ["Web Devloper", "Chef"],
        role: "professional",
        name: "Charlie",
        surname: "Brown",
        email: "a@b.com",
        telephone: 214768
      }
    ];
    console.log("Hello CustomerServiceProvider Provider");
  }

  listAllwithinCategory(profession: String): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/customer/${profession}`, options)
      .toPromise();
  }

  getDetails(id: String): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/customer/${id}`, options)
      .toPromise();
  }
}

