import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerServiceProvider } from '../../providers/customer-service/customer-service';


/**
 * Generated class for the ProfessionalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-professional-detail',
  templateUrl: 'professional-detail.html',
})
export class ProfessionalDetailPage {

  professional: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfessionalDetailPage');
    console.log(this.navParams.data);
    this.professional = this.navParams.data;
  }

}
