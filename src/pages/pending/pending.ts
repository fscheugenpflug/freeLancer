import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { CategoriesPage } from '../categories/categories';
import { PendingDetailPage } from '../pending-detail/pending-detail';
import { DealServiceProvider } from '../../providers/deal-service/deal-service';

/**
 * Generated class for the PendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-pending",
  templateUrl: "pending.html"
})
export class PendingPage {
  tab1Root = CategoriesPage;
  tab2Root = EventsPage;
  tab3Root = PendingPage;
  pendingDeals: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dealService: DealServiceProvider) {}

  ionViewDidLoad() {
    this.dealService.findPendingDeals()
      .then(data => {
        this.pendingDeals = data;
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  showPendingDeal(pendingDeal){
    this.navCtrl.push(PendingDetailPage, pendingDeal)
  };
}
