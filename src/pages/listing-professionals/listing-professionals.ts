import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerServiceProvider } from '../../providers/customer-service/customer-service';
import { ProfessionalDetailPage } from '../professional-detail/professional-detail';

/**
 * Generated class for the ListingProfessionalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-listing-professionals",
  templateUrl: "listing-professionals.html"
})
export class ListingProfessionalsPage {
  profession: string;
  allWithinCategory: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private customerService: CustomerServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ListingProfessionalsPage");
    console.log(this.navParams);
    this.profession = this.navParams.data.profession;
    this.customerService
      .listAllwithinCategory(this.profession)
      .then(data => {
        this.allWithinCategory = data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  selectProfessional(professional) {
    this.navCtrl.push(ProfessionalDetailPage, professional);
  }
}
