import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PendingPage } from '../pending/pending';
import { DealServiceProvider } from '../../providers/deal-service/deal-service';

/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-request",
  templateUrl: "request.html"
})
export class RequestPage {
  professionalId: String;
  description: String;
  street: String;
  city: String;
  postcode: Number;
  country: String;
  date: String;
  time: String;
  accepted: boolean;
  error = null;
  feedbackEnabled = false;
  processing = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dealProvider: DealServiceProvider) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RequestPage");
  }

  submitForm(form){
    // console.log(form);
    this.error = '';
    this.feedbackEnabled = true;
    this.accepted = false;
    if (form.valid) {
      this.processing = true;
      const deal: any = {
        professionalId: this.navParams.data._id,
        description: this.description,
        street: this.street,
        city: this.city,
        postcode: this.postcode,
        country: this.country,
        date: this.date,
        time: this.time,
        accepted: this.accepted
      };
      this.dealProvider.createDeal(deal)
        .then((result) => {
          console.log(result);
          this.navCtrl.push(PendingPage);
        })
        .catch((err) => {
          this.error = err.error.code;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }
}
