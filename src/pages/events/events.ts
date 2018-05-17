import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DealServiceProvider } from '../../providers/deal-service/deal-service';
import { EventsDetailPage } from '../events-detail/events-detail';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-events",
  templateUrl: "events.html"
})
export class EventsPage {
  upcomingDeals: Array<any>;
  bygoneDeals: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dealService: DealServiceProvider
  ) {}

  ionViewDidLoad() {
    this.dealService
      .findUpcomingDeals()
      .then(data => {
        this.upcomingDeals = data;
      })
      .catch(err => {
        console.log(err);
      });
    this.dealService
      .findBygoneDeals()
      .then(data => {
        this.bygoneDeals = data;
      })
      .catch(err => {
        console.log(err);
      });
  }
  showUpcomingDeal(upcomingDeal) {
    this.navCtrl.push(EventsDetailPage, upcomingDeal)
  }
  showBygoneDeal(bygoneDeal) {
    this.navCtrl.push(EventsDetailPage, bygoneDeal)
  }
  
}
