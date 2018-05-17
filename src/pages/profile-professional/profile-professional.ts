import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the ProfileProfessionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-professional',
  templateUrl: 'profile-professional.html',
})
export class ProfileProfessionalPage {

  professional: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    this.authService.me()
      .then((data) => {
        this.professional = data;
      })
      
    }
  showData(){
    console.log(this.professional)
  }
  }
