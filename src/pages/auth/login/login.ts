import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { AuthServiceProvider } from '../../../providers/auth-service/auth-service';
import { TabsProfessionalPage } from '../../tabs-professional/tabs-professional';
import { TabsPage } from '../../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider) { }
  error = null;
  feedbackEnabled = false;
  processing = false;
  email: string;
  password: string;
  role: string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const user = {
        email: this.email,
        password: this.password
      };
      this.authService.login(user)
        .then((result) => {
          if(result.role === 'professional') {
            this.navCtrl.push(TabsProfessionalPage)
          } else {
            this.navCtrl.push(TabsPage)
          }
        })
        .catch((err) => {
          this.error = err.error.code;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

  signup() {
    this.navCtrl.push(SignupPage)
  }

}
