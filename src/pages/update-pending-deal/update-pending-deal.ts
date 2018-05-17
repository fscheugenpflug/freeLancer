import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PendingPage } from '../pending/pending';
import { DealServiceProvider } from '../../providers/deal-service/deal-service';

/**
 * Generated class for the UpdatePendingDealPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-update-pending-deal",
  templateUrl: "update-pending-deal.html"
})
export class UpdatePendingDealPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dealsService: DealServiceProvider
  ) {}
  error = null;
  feedbackEnabled = false;
  processing = false;
  date: string;
  time: string;
  pendingDeal: any;

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpdatePendingDealPage");
    this.pendingDeal = this.navParams.data;
  }

  submitForm(form) {
    this.error = "";
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const id = this.pendingDeal._id;
      const setup: any = {
        date: this.date,
        time: this.time
      };
      this.dealsService
        .updatePendingDate(setup, id)
        .then((result) => {
          this.navCtrl.push(PendingPage);
        })
        .catch(err => {
          this.error = err.error.code;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }
}
