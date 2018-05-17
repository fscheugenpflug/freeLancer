import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DealServiceProvider } from '../../providers/deal-service/deal-service';
import { PendingPage } from '../pending/pending';
import { EventsPage } from '../events/events';

/**
 * Generated class for the PendingDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-pending-detail",
  templateUrl: "pending-detail.html"
})
export class PendingDetailPage {
  pendingDeal: any;
  user: Object;
  professional: boolean;
  accepted: boolean;
  pendingDeals: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authService: AuthServiceProvider,
    private dealService: DealServiceProvider
  ) {}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PendingDetailPage');
    // console.log(this.navParams.data);

    this.authService.me().then(result => {
      if (result.role === "professional") {
        this.professional = true;
      } else {
        this.professional = false;
      }
    });
    console.log(this.professional);
    this.pendingDeal = this.navParams.data;
  }
  cancelDeal(pendingDeal) {
    this.dealService.removeDeal(pendingDeal._id);
    this.dealService.findPendingDeals()
    .then(result => {
      this.pendingDeals = result;
      this.navCtrl.push(PendingPage, this.pendingDeals);
    })
  }
  confirmDeal(pendingDeal) {
    this.dealService.updateDeal(pendingDeal._id)
    this.navCtrl.push(EventsPage)
  }
  updateDeal(pendingDeal) {
    // this.dealService.resetDealDate(pendingDeal.id)
    // this.navCtrl.push(PendingPage)
  }
}
