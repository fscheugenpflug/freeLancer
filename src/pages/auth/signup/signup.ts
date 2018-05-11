import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { CategoriesPage } from '../../categories/categories';
import { SetupProfessionalPage } from '../../setup-professional/setup-professional';
import { LoginPage } from '../login/login';
import { TabsPage } from '../../tabs/tabs';
import { AuthServiceProvider } from '../../../providers/auth-service/auth-service';



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  statusProfessional: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider) {}
    
    error = null;
    feedbackEnabled = false;
    processing = false;
    role: String;
    name: string;
    surname: string;
    email: string;
    address: string;
    telephone: number;
    profession: Array<any>;


    password: string;

  ionViewDidLoad() {}
// -- Set UsrRole
  setRoleToProfessional(click) {
    this.statusProfessional = true;
  }
  setRoleToCustomer(click) {
    this.statusProfessional = false;
  }
// -- Submitform 
  submitForm(form) {
      console.log(form);
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const user: any = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        role: 'customer'
      };
      if(this.statusProfessional) {
        user.address = this.address;
        user.telephone = this.telephone;
        user.profession = this.profession;
        user.role = 'professional';
      }
      this.authService.signup(user)
        .then((result) => {
          console.log(result);
          if (this.statusProfessional) {
            this.navCtrl.push(SetupProfessionalPage);
          } else {
            this.navCtrl.push(TabsPage);
          }
        })
        .catch((err) => {
          this.error = err.error.code;
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

  login() {
    this.navCtrl.push(LoginPage);
  }
  signup() {
    
  }
}
