import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
// import { CustomerServiceProvider } from '../../providers/customer-service/customer-service';
import { RequestPage } from '../request/request';
import { CallNumber } from "@ionic-native/call-number";


/**
 * Generated class for the ProfessionalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-professional-detail",
  templateUrl: "professional-detail.html"
})
export class ProfessionalDetailPage {
  professional: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alerCtrl: AlertController,
    private callNumber: CallNumber 
    )
  {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProfessionalDetailPage");
    console.log(this.navParams.data);
    this.professional = this.navParams.data;
  }

  dialProfessional() {
    this.callNumber.callNumber(this.professional.telephone, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  };

  showAddress() {
    let address =
      this.professional.street +
      ", " +
      this.professional.postcode +
      " " +
      this.professional.city +
      ", " +
      this.professional.country;
    let confirm = this.alerCtrl.create({
      title: "Address",
      message: address,
      buttons: [
        {
          text: "OK",
          handler: () => {
            console.log("ok clicked");
          }
        }
      ]
    });
    confirm.present();
  }

  requestProfessional(professional) {
    this.navCtrl.push(RequestPage, professional)
  }
}
