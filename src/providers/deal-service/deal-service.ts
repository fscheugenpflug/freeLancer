import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the DealProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DealServiceProvider {
  // private user: any;
  
  private baseUrl = "http://localhost:3000/deals";
  constructor(public httpClient: HttpClient) {}

  // private setUser(user?: any) {
  //   this.user = user;
  //   return user;
  // }

  createDeal(deal: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient
      .post(`${this.baseUrl}`, deal, options)
      .toPromise();
  }

  findPendingDeals(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient
      .get(`${this.baseUrl}/pending`, options)
      .toPromise();
  }

  removeDeal(id: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient
      .delete(`${this.baseUrl}/pending/${id}`, options)
      .toPromise();
  }
  updateDeal(id: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient
      .put(`${this.baseUrl}/pending/${id}/updatestatus`, options)
      .toPromise();
  }

  findUpcomingDeals(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient
      .get(`${this.baseUrl}/approved/upcoming`, options)
      .toPromise();
  }
  findBygoneDeals(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient
      .get(`${this.baseUrl}/approved/bygone`, options)
      .toPromise();
  }
}
