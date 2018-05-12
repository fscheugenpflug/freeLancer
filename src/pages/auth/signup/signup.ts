import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { CategoriesPage } from '../../categories/categories';
import { SetupProfessionalPage } from '../../setup-professional/setup-professional';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from '../../../providers/auth-service/auth-service';
import { CategoriesPage } from '../../categories/categories';



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
  error = null;
  feedbackEnabled = false;
  passwordEqual: Boolean;
  processing = false;
  role: String;
  name: string;
  surname: string;
  email: string;
  address: string;
  telephone: number;
  profession: Array<any>;
  password: string;
  passwordRepeat: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthServiceProvider) {

  }
    
  handleKeyup() {
    console.log('ok');
    if (this.password !== this.passwordRepeat) {
      this.passwordEqual = false;
    } else {
      this.passwordEqual = true;
    }
  }


  
  ionViewDidLoad() {
    // if(this.password === this.passwordRepeat) {
    //   this.passwordEqual = true;
    // } else {
    //   this.passwordEqual = false;
    // }
  };
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
            this.navCtrl.push(CategoriesPage);
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
